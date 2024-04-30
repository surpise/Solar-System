import '@styles/components/Home/Display.css';

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
  return (
    <div className="display">
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
  );
};

export default Display;
