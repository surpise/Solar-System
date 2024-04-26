import '@styles/components/planetary-system/Mars.css';

import { useClassNameBySpeedStore } from '@utils/utils';

const Mars = () => {
  return (
    <div className={`orbit mars-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`planet mars ${useClassNameBySpeedStore()}`}></div>
    </div>
  );
};

export default Mars;
