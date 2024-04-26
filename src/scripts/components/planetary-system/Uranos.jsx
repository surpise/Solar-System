import '@styles/components/planetary-system/Uranos.css';

import { useClassNameBySpeedStore } from '@utils/utils';

const Uranos = () => {
  return (
    <div className={`orbit uranos-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`planet uranos ${useClassNameBySpeedStore()}`}></div>
    </div>
  );
};

export default Uranos;
