import { create } from "zustand";

const useBlurStore = create((set) => ({
  isBlurred: true,
  toggleBlur: () => set((state) => ({ isBlurred: !state.isBlurred })),
  setBlur: (value) => set({ isBlurred: value }),
}));

export default useBlurStore;
