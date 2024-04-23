import '@styles/components/planetary-system/Earth.css';

const Earth = () => {
  return (
    <div className="orbit earth-orbit">
      <div className="earth">
        <div className="orbit moon-orbit">
          <div className="planet moon"></div>
        </div>
      </div>
    </div>
  );
};

export default Earth;
