import '@styles/components/Sun.css';

import Earth from '@components/Earth';
import Mercury from '@components/Mercury';
import Venus from '@components/Venus';
import Mars from '@components/Mars';
import Jupiter from '@components/Jupiter';

const Sun = () => {
  return (
    <div className="sun">
      <Mercury />
      <Venus/>
      <Earth />
      <Mars/>
      <Jupiter/>
    </div>
  );
};

export default Sun;
