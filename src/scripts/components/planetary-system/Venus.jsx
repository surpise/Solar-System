import '@styles/components/planetary-system/Venus.css';

import { useClassNameBySpeedStore } from '@utils/utils';

const Venus = () => {
  return (
    <div className={`orbit venus-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`planet venus ${useClassNameBySpeedStore()}`}></div>
    </div>
  );
};

export default Venus;
