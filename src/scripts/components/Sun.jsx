import '@styles/components/Sun.css';

import Earth from '@components/Earth';
import Mercury from '@components/Mercury';

const Sun = () => {
  return (
    <div className="sun">
      <Mercury />
      <Earth />
    </div>
  );
};

export default Sun;
