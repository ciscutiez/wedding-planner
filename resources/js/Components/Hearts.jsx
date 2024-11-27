import React from 'react';

const Heart = ({ x, y, size, animationDuration, color }) => {
  const style = {
    position: 'absolute',
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    transform: 'rotate(45deg)',
    animation: `float ${animationDuration}s infinite ease-in-out`,
    clipPath: 'polygon(50% 0%, 100% 25%, 75% 100%, 50% 75%, 25% 100%, 0% 25%)',
  };

  return <div style={style} />;
};

export default Heart;
