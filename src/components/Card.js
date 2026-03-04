import React from 'react';

export const Card = ({ 
  children, 
  type = 'default',
  className = '', 
  refProp 
}) => {
  const typeClass = {
    education: 'education-card',
    project: 'project-card',
    skill: 'skill-card',
    default: ''
  }[type];

  return (
    <div 
      className={`${typeClass} ${className}`} 
      ref={refProp}
    >
      {children}
    </div>
  );
};