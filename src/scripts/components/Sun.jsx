import '@styles/components/Common.css';
import '@styles/components/Sun.css';

import Earth from '@components/Earth';
import Mercury from '@components/Mercury';
import Venus from '@components/Venus';
import Mars from '@components/Mars';
import Jupiter from '@components/Jupiter';
import Saturn from '@components/Saturn';

const Sun = () => {
  return (
    <div className="sun">
      <Mercury />
      <Venus/>
      <Earth />
      <Mars/>
      <Jupiter/>
      <Saturn/>
    </div>
  );
};

export default Sun;
