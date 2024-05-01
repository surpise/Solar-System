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

  const handleZoomOut = () => {
    if (scale > 0.5) setScale(scale - 0.2);
  };

  const handleZoomIn = () => {
    if (scale < 2) setScale(scale + 0.2);
  };

  return (
    <>
      <div className="display" style={{ transform: `scale(${scale})` }}>
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
