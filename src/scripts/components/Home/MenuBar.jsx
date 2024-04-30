import '@styles/components/Home/MenuBar.css';

import useSpeedStore from '@/scripts/store/useSpeedStore';

const MenuBar = () => {
  const { setAnimationSpeed } = useSpeedStore((state) => state);

  return (
    <div className="menuBar">
      <p className="logo">Solar System</p>
      <div className="speedSlider">
        <input id="speed-05" type="radio" name="animationSpeed" value={0.5} required />
        <label
          htmlFor="speed-05"
          data-animation-speed="0.5"
          onClick={() => setAnimationSpeed(0.5)}
        ></label>

        <input
          id="speed-10"
          type="radio"
          name="animationSpeed"
          value={1.0}
          required
          defaultChecked
        />
        <label
          htmlFor="speed-10"
          data-animation-speed="1.0"
          onClick={() => setAnimationSpeed(1.0)}
        ></label>

        <input id="speed-15" type="radio" name="animationSpeed" value={1.5} required />
        <label
          htmlFor="speed-15"
          data-animation-speed="1.5"
          onClick={() => setAnimationSpeed(1.5)}
        ></label>

        <input id="speed-20" type="radio" name="animationSpeed" value={2.0} required />
        <label
          htmlFor="speed-20"
          data-animation-speed="2.0"
          onClick={() => setAnimationSpeed(2.0)}
        ></label>

        <div className="dot"></div>
      </div>
    </div>
  );
};

export default MenuBar;
