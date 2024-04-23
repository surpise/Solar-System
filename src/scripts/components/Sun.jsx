import '@styles/components/Common.css';
import '@styles/components/Sun.css';

import Earth from '@components/Earth';
import Mercury from '@components/Mercury';
import Venus from '@components/Venus';
import Mars from '@components/Mars';
import Jupiter from '@components/Jupiter';
import Saturn from '@components/Saturn';
import Uranos from '@components/Uranos';

const Sun = () => {
  return (
    <div className="sun">
      <Mercury />
      <Venus/>
      <Earth />
      <Mars/>
      <Jupiter/>
      <Saturn/>
      <Uranos/>
    </div>
  );
};

export default Sun;
