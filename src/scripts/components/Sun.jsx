import '@styles/components/Sun.css';

import Earth from '@components/Earth';
import Mercury from '@components/Mercury';
import Venus from '@components/Venus';
import Mars from '@components/Mars';

const Sun = () => {
  return (
    <div className="sun">
      <Mercury />
      <Venus/>
      <Earth />
      <Mars/>
    </div>
  );
};

export default Sun;
