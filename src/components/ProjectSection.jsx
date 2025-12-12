import React from 'react';

const ProjectSection = ({ id, className, background = 'white', children, ...props }) => {
  const bgStyle = background === 'gray' 
    ? { backgroundColor: 'var(--color-gray-50)' } 
    : { backgroundColor: 'var(--color-white)' };

  return (
    <section 
      className={`section ${className || ''}`} 
      id={id} 
      style={bgStyle}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default ProjectSection;
