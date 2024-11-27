import React from 'react';

const AnimatedRoses = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <path id="rose" d="M10,0 C5,5 0,10 0,15 C0,20 5,25 10,25 C15,25 20,20 20,15 C20,10 15,5 10,0 Z" />
        </defs>
        {[...Array(10)].map((_, i) => (
          <use
            key={i}
            href="#rose"
            fill="#FFB6C1"
            opacity="0.5"
            transform={`translate(${Math.random() * 100} ${Math.random() * 100}) scale(${0.5 + Math.random()})`}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from={`${Math.random() * 100} ${-20}`}
              to={`${Math.random() * 100} ${120}`}
              dur={`${10 + Math.random() * 20}s`}
              repeatCount="indefinite"
            />
          </use>
        ))}
      </svg>
    </div>
  );
};

export default AnimatedRoses;

