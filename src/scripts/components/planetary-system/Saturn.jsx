import '@styles/components/planetary-system/Saturn.css';

import { useClassNameBySpeedStore } from '@utils/utils';

const Saturn = () => {
  return (
    <div className={`orbit saturn-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`planet saturn ${useClassNameBySpeedStore()}`}></div>
    </div>
  );
};

export default Saturn;
