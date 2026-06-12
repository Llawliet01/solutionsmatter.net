import React from 'react';

export default function BackgroundRings({ count = 5, colors = [] }) {
  const rings = [];
  const defaultColors = ['#38BDF8', '#5E3BEE', '#10B981']; // Sky Blue, Violet, Mint Green

  for (let i = 0; i < count; i++) {
    const top = 150 + i * 600;
    const isRight = i % 2 === 0;
    const colorIndex = i % defaultColors.length;
    const ringColor = colors[i % colors.length] || defaultColors[colorIndex];
    
    let strokeDasharray = '';
    if (i % 3 === 0) strokeDasharray = '10 15';
    else if (i % 3 === 2) strokeDasharray = '180 40';

    rings.push({
      id: i + 1,
      top: `${top}px`,
      position: isRight ? { right: '-375px' } : { left: '-375px' },
      color: ringColor,
      strokeWidth: 35 + (i % 3) * 5,
      strokeDasharray
    });
  }

  return (
    <div className="bg-rings-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {rings.map((ring) => (
        <div 
          key={ring.id} 
          className={`mask mask-${ring.id}`} 
          style={{ 
            position: 'absolute', 
            top: ring.top, 
            ...ring.position 
          }}
        >
          <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle 
              cx="250" 
              cy="250" 
              r="220" 
              stroke={ring.color} 
              strokeWidth={ring.strokeWidth} 
              strokeDasharray={ring.strokeDasharray || undefined} 
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
