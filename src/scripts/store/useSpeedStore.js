import { create } from 'zustand';

const useSpeedStore = create((set) => ({
  animationSpeed: 1.0,
  setAnimationSpeed: (newSpeed) => set({ animationSpeed: newSpeed }),
}));

export default useSpeedStore;
