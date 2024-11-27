import React, { useState, useEffect } from 'react';
import Heart from './Hearts';

const AnimatedHeartsBackground = ({ numHearts = 20 }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const colors = ['#FF6B6B', '#FF8E8E', '#FF4757', '#FF6B6B', '#FF7F50'];
    const newHearts = Array.from({ length: numHearts }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: 100 + Math.random() * 100,
      size: 20 + Math.random() * 30,
      animationDuration: 5 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setHearts(newHearts);
  }, [numHearts]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  );
};

export default AnimatedHeartsBackground;
