import '@styles/components/common/MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menuBar">
      <p className="logo">Solar System</p>
      <div className="speedSlider">
        <input id="speed05" type="radio" name="animationSpeed" value={0.5} required />
        <label htmlFor="speed05" data-animation-speed="0.5"></label>

        <input id="speed10" type="radio" name="animationSpeed" value={1.0} required />
        <label htmlFor="speed10" data-animation-speed="1.0"></label>

        <input id="speed15" type="radio" name="animationSpeed" value={1.5} required />
        <label htmlFor="speed15" data-animation-speed="1.5"></label>

        <input id="speed20" type="radio" name="animationSpeed" value={2.0} required />
        <label htmlFor="speed20" data-animation-speed="2.0"></label>

        <div className="dot"></div>
      </div>
    </div>
  );
};

export default MenuBar;
