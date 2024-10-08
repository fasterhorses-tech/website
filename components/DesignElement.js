import React, { useState, useCallback, useEffect } from 'react';

const DesignElement = ({
  className = '',
  triggerRotation,
  size = '24px', // Default size of 24px (equivalent to w-6 h-6)
}) => {
  const [baseRotation] = useState(() => Math.random() * 360);
  const [hoverRotation, setHoverRotation] = useState(0);

  useEffect(() => {
    if (triggerRotation) {
      setHoverRotation(Math.random() * 60 - 30); // Random rotation between -30 and 30 degrees
    }
  }, [triggerRotation]);

  return (
    <div 
      className={`bg-orange-600 transition-transform duration-300 ease-in-out ${className}`}
      style={{ 
        transform: `rotate(${baseRotation + hoverRotation}deg)`,
        width: `${size}`,
        height: `${size}`,
        minWidth: `${size}`,
        minHeight: `${size}`,
      }}
    />
  );
};

export default DesignElement;
