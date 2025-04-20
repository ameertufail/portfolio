import React from 'react';

const FallbackBall = ({ name }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div 
        className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, #ff9d00 0%, #e86a00 100%)',
          boxShadow: '0 4px 20px rgba(255, 155, 0, 0.4)'
        }}
      >
        <span className="text-xs text-white font-bold text-center">{name || 'Tech'}</span>
      </div>
    </div>
  );
};

export default FallbackBall; 