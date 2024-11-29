import {create} from 'zustand';

interface BreathingStore {
  completedExercises: number;
  isComplete: boolean;
  addCompletedExercise: () => void;
  reset: () => void;
}

export const useBreathingStore = create<BreathingStore>((set) => ({
  completedExercises: 0,
  isComplete: false,
  addCompletedExercise: () => set((state) => {
    const newCount = state.completedExercises + 1;
    return {
      completedExercises: newCount,
      isComplete: newCount >= 2
    };
  }),
  reset: () => set({ completedExercises: 0, isComplete: false }),
})); 