import React, { useState, useRef, useEffect } from 'react';
import './RadialMenu.css';

const RadialMenu = ({ items, logoPath, activeSection }) => {
  // Configuration
  const RADIUS = 105; // Distance of items from center (Reduced from 135)
  const ITEM_ANGLE_STEP = 360 / (items.length || 6); // Distribute evenly

  const [rotation, setRotation] = useState(() => {
    // Initialize rotation so the active item (or first item) is at the top (270 degrees)
    let targetIndex = 0;
    if (activeSection) {
      const index = items.findIndex(item => item.id === activeSection);
      if (index !== -1) targetIndex = index;
    }
    return 270 - (targetIndex * ITEM_ANGLE_STEP);
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isInertia, setIsInertia] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  
  const ringRef = useRef(null);
  const startAngleRef = useRef(0);
  const startRotationRef = useRef(0);
  const currentRotationRef = useRef(rotation);
  const velocityRef = useRef(0);
  const animationFrameRef = useRef(null);
  const lastActiveSectionRef = useRef(activeSection);
  const navigationTimeoutRef = useRef(null);
  const pendingNavigationItemRef = useRef(null);

  // Sync ref with state when not animating/dragging to keep them aligned
  useEffect(() => {
    if (!isDragging && !isInertia) {
      currentRotationRef.current = rotation;
    }
  }, [rotation, isDragging, isInertia]);

  // Calculate angle from center of the ring to the touch point
  const getAngle = (clientX, clientY) => {
    if (!ringRef.current) return 0;
    const rect = ringRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // atan2 returns angle in radians from -PI to PI
    // We convert to degrees
    return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsInertia(false); // Stop inertia if catching the wheel
    const touch = e.touches[0];
    startAngleRef.current = getAngle(touch.clientX, touch.clientY);
    
    // Use ref for immediate start position to avoid state lag
    startRotationRef.current = currentRotationRef.current;
    velocityRef.current = 0;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    pendingNavigationItemRef.current = null;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const currentAngle = getAngle(touch.clientX, touch.clientY);
    
    // Calculate delta
    let delta = currentAngle - startAngleRef.current;
    
    const newRotation = startRotationRef.current + delta;
    
    // Calculate velocity for inertia (difference from last frame)
    velocityRef.current = newRotation - currentRotationRef.current;
    currentRotationRef.current = newRotation;
    
    setRotation(newRotation);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsInertia(true);
    
    const runInertia = () => {
      // Low friction for "indefinite" slide feel
      velocityRef.current *= 0.97; 

      if (Math.abs(velocityRef.current) > 0.05) {
        currentRotationRef.current += velocityRef.current;
        setRotation(currentRotationRef.current);
        animationFrameRef.current = requestAnimationFrame(runInertia);
      } else {
        finishInteraction();
      }
    };
    
    runInertia();
  };

  const finishInteraction = () => {
    const current = currentRotationRef.current;
    
    // Snap logic:
    // We want (Rotation - 270) to be a multiple of STEP
    // So Rotation = k * STEP + 270
    const offset = current - 270;
    const snappedOffset = Math.round(offset / ITEM_ANGLE_STEP) * ITEM_ANGLE_STEP;
    const targetRotation = snappedOffset + 270;

    setIsInertia(false); // Re-enable CSS transition for the final snap
    setRotation(targetRotation);
    currentRotationRef.current = targetRotation;

    // Navigate to the selected item
    // Calculate which item index corresponds to this rotation
    // targetRotation = 270 - index * STEP
    // index = (270 - targetRotation) / STEP
    let index = Math.round((270 - targetRotation) / ITEM_ANGLE_STEP);
    
    // Normalize index to 0..length-1
    const count = items.length;
    index = ((index % count) + count) % count;
    
    const item = items[index];
    if (item) {
      // Lock updates until we reach this item
      pendingNavigationItemRef.current = item.id;

      // Wait for snap animation (0.4s) then navigate
      navigationTimeoutRef.current = setTimeout(() => {
        window.location.href = `#${item.id}`;
        
        // Safety timeout to clear pending status if scroll never completes
        setTimeout(() => {
          if (pendingNavigationItemRef.current === item.id) {
            pendingNavigationItemRef.current = null;
          }
        }, 2000);
      }, 400);
    }
  };

  // Sync rotation with activeSection from parent (scroll)
  useEffect(() => {
    if (!activeSection || isDragging || isInertia) return;

    // If we are navigating to a specific item, ignore updates from other sections (intermediate ones)
    if (pendingNavigationItemRef.current) {
      if (activeSection !== pendingNavigationItemRef.current) {
        return; 
      }
      // We reached the target, clear the lock
      pendingNavigationItemRef.current = null;
    }

    // Only sync if the active section has actually changed from the outside
    // This prevents the menu from reverting to the old section immediately after interaction
    if (activeSection !== lastActiveSectionRef.current) {
      lastActiveSectionRef.current = activeSection;

      const index = items.findIndex(item => item.id === activeSection);
      if (index !== -1) {
        // Calculate target rotation to bring this item to top (270 degrees)
        const itemAngle = index * ITEM_ANGLE_STEP;
        let targetRotation = 270 - itemAngle;
        
        // Find shortest path logic
        const currentRot = rotation;
        const normalize = (angle) => ((angle % 360) + 360) % 360;
        const currentNormalized = normalize(currentRot);
        const targetNormalized = normalize(targetRotation);
        
        let delta = targetNormalized - currentNormalized;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        
        setRotation(currentRot + delta);
      }
    }
  }, [activeSection, items, isDragging, isInertia, ITEM_ANGLE_STEP, rotation]);

  // Determine active item based on rotation
  useEffect(() => {
    let bestItem = null;
    let minDiff = Infinity;

    items.forEach((item, index) => {
      const itemBaseAngle = index * ITEM_ANGLE_STEP;
      let currentItemAngle = (itemBaseAngle + rotation) % 360;
      if (currentItemAngle < 0) currentItemAngle += 360;
      
      // Target is 270 degrees (top)
      let diff = Math.abs(currentItemAngle - 270);
      if (diff > 180) diff = 360 - diff; // Shortest path
      
      if (diff < minDiff) {
        minDiff = diff;
        bestItem = item.id;
      }
    });

    setActiveItem(bestItem);
  }, [rotation, items, ITEM_ANGLE_STEP]);

  return (
    <div className="radial-menu-container">
      <div className="radial-center-marker">
        <a href="/index.html" aria-label="Home">
          <img src={logoPath} alt="Menu" />
        </a>
      </div>
      
      <div 
        className={`radial-items-ring ${isDragging || isInertia ? 'dragging' : ''}`}
        ref={ringRef}
        style={{ transform: `rotate(${rotation}deg)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => {
          // Position items around the circle
          const angleDeg = index * ITEM_ANGLE_STEP;
          const angleRad = angleDeg * (Math.PI / 180);
          
          // Center is 140, 140 (half of 280px width/height)
          const x = 140 + RADIUS * Math.cos(angleRad);
          const y = 140 + RADIUS * Math.sin(angleRad);
          
          // Counter-rotate icons so they stay upright
          const iconRotation = -rotation;

          // Check if this item is the active one (either by scroll or drag)
          // Prefer activeSection if not dragging, otherwise calculated activeItem
          const isActive = isDragging ? (activeItem === item.id) : (activeSection === item.id);

          return (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`radial-item ${isActive ? 'active' : ''}`}
              style={{ 
                left: `${x}px`, 
                top: `${y}px`,
                transform: `rotate(${iconRotation}deg)` 
              }}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default RadialMenu;
