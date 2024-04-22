import '@styles/components/Sun.css';

import Earth from '@components/Earth';
import Mercury from '@components/Mercury';
import Venus from '@components/Venus';

const Sun = () => {
  return (
    <div className="sun">
      <Mercury />
      <Venus/>
      <Earth />
    </div>
  );
};

export default Sun;
