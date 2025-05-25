import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const FeatureCircle = ({ percent, title, text }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation duration in ms
    const stepTime = 20; // ms per step
    const steps = duration / stepTime;
    const increment = percent / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= percent) {
        setProgress(percent);
        clearInterval(timer);
      } else {
        setProgress(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div className="feature-circle">
      <div className="progressbar">
        <div>
          <CircularProgressbar
            value={progress}
            text={`${Math.round(progress)}%`}
            styles={buildStyles({
              textSize: '14px',
              pathColor: '#007BFF',
              textColor: '#333',
              trailColor: '#eee'
            })}
          />
        </div>
        <div className="feature-circle_content">
          <h3 className="box-title">{title}</h3>
          <p className="feature-circle_text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCircle;
