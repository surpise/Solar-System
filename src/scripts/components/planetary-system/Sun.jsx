import '@styles/components/planetary-system/common.css';
import '@styles/components/planetary-system/Sun.css';


import { useClassNameBySpeedStore } from '@utils/utils';

const Sun = () => {
  return (
    <div className={`sun ${useClassNameBySpeedStore()}`}>

    </div>
  );
};

export default Sun;
