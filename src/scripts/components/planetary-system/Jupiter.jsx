import '@styles/components/planetary-system/Jupiter.css';

import { useClassNameBySpeedStore } from '@utils/utils';

const Jupiter = () => {
  return (
    <div className={`orbit jupiter-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`planet jupiter ${useClassNameBySpeedStore()}`}></div>
    </div>
  );
};

export default Jupiter;
