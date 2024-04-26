import useSpeedStore from '@store/useSpeedStore';

export const useClassNameBySpeedStore = () => {
  const { animationSpeed } = useSpeedStore();

  if (animationSpeed === 0.5) return 'speed-05';
  else if (animationSpeed === 1.0) return 'speed-10';
  else if (animationSpeed === 1.5) return 'speed-15';
  else if (animationSpeed === 2.0) return 'speed-20';
};
