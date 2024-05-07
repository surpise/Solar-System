import { useClassNameBySpeedStore } from '@utils/utils';

const Planet = ({ planetName, children }) => {
  const childElement = children || null;

  return (
    <div className={`orbit ${planetName}-orbit ${useClassNameBySpeedStore()}`}>
      <div className={`planet ${planetName} ${useClassNameBySpeedStore()}`}>{childElement}</div>
    </div>
  );
};

export default Planet;
