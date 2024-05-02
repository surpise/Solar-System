import '@styles/components/Home/Display.css';

import { useState } from 'react';

import Sun from '@components/planetary-system/Sun';
import Earth from '@components/planetary-system/Earth';
import Mercury from '@components/planetary-system/Mercury';
import Venus from '@components/planetary-system/Venus';
import Mars from '@components/planetary-system/Mars';
import Jupiter from '@components/planetary-system/Jupiter';
import Saturn from '@components/planetary-system/Saturn';
import Uranos from '@components/planetary-system/Uranos';
import Neptune from '@components/planetary-system/Neptune';

const Display = () => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleZoomOut = () => {
    if (scale > 0.5) setScale(scale - 0.2);
  };

  const handleZoomIn = () => {
    if (scale < 2) setScale(scale + 0.2);
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
    <>
      <div
        className="display"
        style={{ transform: `scale(${scale})` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranos />
        <Neptune />
      </div>
      <div className="zoomButtonContainer">
        <button className="zoomOut" onClick={handleZoomOut}>
          -
        </button>
        <button className="zoomIn" onClick={handleZoomIn}>
          +
        </button>
      </div>
    </>
  );
};

export default Display;
