import '@styles/components/planetary-system/Neptune.css';

import { useClassNameBySpeedStore } from '@utils/utils';

const Neptune = () => {
  return (
    <div className={`orbit neptune-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`planet neptune ${useClassNameBySpeedStore()}`}></div>
    </div>
  );
};

export default Neptune;
