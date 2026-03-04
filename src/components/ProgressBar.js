import React, { useEffect, useRef } from 'react';

export const ProgressBar = ({ id, value, label }) => {
  const barRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (barRef.current && valueRef.current) {
        barRef.current.style.width = `${value}%`;
        valueRef.current.textContent = `${value}%`;
      }
    }, 500);
  }, [value]);

  return (
    <>
      <div className="skill-progress">
        <div id={`progress-${id}`} ref={barRef} className="progress-bar"></div>
        <span id={`value-${id}`} ref={valueRef} className="skill-value">0%</span>
      </div>
      <p>{label}</p>
    </>
  );
};