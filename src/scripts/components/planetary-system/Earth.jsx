import '@styles/components/planetary-system/Earth.css';

import { useClassNameBySpeedStore } from '@utils/utils';

const Earth = () => {
  return (
    <div className={`orbit earth-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`earth ${useClassNameBySpeedStore()}`}>
        <div className={`orbit moon-orbit ${useClassNameBySpeedStore()}`}>
          <div className="planet moon"></div>
        </div>
      </div>
    </div>
  );
};

export default Earth;
