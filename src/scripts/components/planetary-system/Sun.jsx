import '@styles/components/Common.css';
import '@styles/components/planetary-system/Sun.css';

import Earth from '@scripts/components/planetary-system/Earth';
import Mercury from '@scripts/components/planetary-system/Mercury';
import Venus from '@scripts/components/planetary-system/Venus';
import Mars from '@scripts/components/planetary-system/Mars';
import Jupiter from '@scripts/components/planetary-system/Jupiter';
import Saturn from '@scripts/components/planetary-system/Saturn';
import Uranos from '@scripts/components/planetary-system/Uranos';
import Neptune from '@scripts/components/planetary-system/Neptune';

const Sun = () => {
  return (
    <div className="sun">
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

export default Sun;
