import '@styles/components/Home/Display.css';
import '@styles/components/planetary-system/planetary-system.css';

import { useState } from 'react';

import Sun from '@components/planetary-system/Sun';
import Planet from '@components/planetary-system/Planet';

const Display = () => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleZoom = (factor) => {
    const newScale = scale + factor;
    if (newScale >= 0.5 && newScale <= 2) setScale(newScale);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - e.currentTarget.offsetLeft,
      y: e.clientY - e.currentTarget.offsetTop,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      e.currentTarget.style.left = newX + 'px';
      e.currentTarget.style.top = newY + 'px';
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="display">
      <div
        className="planetary-system"
        style={{ transform: `scale(${scale})` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Sun />
        <Planet planetName={'mercury'} />
        <Planet planetName={'venus'} />
        <Planet planetName={'earth'}>
          <Planet planetName={'moon'} />
        </Planet>
        <Planet planetName={'mars'} />
        <Planet planetName={'jupiter'} />
        <Planet planetName={'saturn'} />
        <Planet planetName={'uranos'} />
        <Planet planetName={'neptune'} />
      </div>
      
      <div className="zoomButtonContainer">
        <button className="zoomButton" onClick={() => handleZoom(-0.2)}>
          -
        </button>
        <button className="zoomButton" onClick={() => handleZoom(0.2)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Display;
