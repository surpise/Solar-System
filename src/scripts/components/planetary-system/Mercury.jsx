import '@styles/components/planetary-system/Mercury.css';

import { useClassNameBySpeedStore } from '@utils/utils';

const Mercury = () => {
  return (
    <div className={`orbit mercury-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`planet mercury ${useClassNameBySpeedStore()}`}></div>
    </div>
  );
};

export default Mercury;
