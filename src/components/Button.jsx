import React from 'react';

/**
 * Reusable Button Component
 * 
 * @param {string} variant - 'primary' or 'secondary'
 * @param {string} href - If provided, renders an anchor tag
 * @param {string} icon - FontAwesome icon class (e.g., 'fas fa-download')
 * @param {boolean} fullWidth - If true, adds 'btn--full' class
 * @param {string} className - Additional classes
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 */
const Button = ({ 
  variant = 'primary', 
  href, 
  icon, 
  fullWidth = false, 
  className = '', 
  children, 
  onClick,
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const widthClass = fullWidth ? 'btn--full' : '';
  const combinedClasses = `${baseClass} ${variantClass} ${widthClass} ${className}`.trim();

  const content = (
    <>
      {icon && <i className={`${icon} ${children ? 'mr-2' : ''}`} aria-hidden="true"></i>}
      {children && <span>{children}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
