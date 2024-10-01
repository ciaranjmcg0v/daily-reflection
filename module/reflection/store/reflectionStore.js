"use client";

import { create } from "zustand";

const useReflectionStore = create((set) => ({
  name: "",
  emojiBefore: "",
  emojiBeforeType: "",
  reflectionText: "",
  emojiAfter: "",
  emojiAfterType: "",
  reflectionSummary: "",
  currentStep: 0, // New state for current step

  setName: (name) => set({ name }),
  setEmojiBefore: (emoji) => set({ emojiBefore: emoji }),
  setEmojiBeforeType: (type) => set({ emojiBeforeType: type }),
  setReflectionText: (text) => set({ reflectionText: text }),
  setEmojiAfter: (emoji) => set({ emojiAfter: emoji }),
  setEmojiAfterType: (type) => set({ emojiAfterType: type }),
  setReflectionSummary: (summary) => set({ reflectionSummary: summary }),

  nextStep: () =>
    set((state) => ({ currentStep: Math.min(state.currentStep + 1, 4) })), // Adjust max based on steps
  reset: () =>
    set({
      name: "",
      emojiBefore: "",
      emojiBeforeType: "",
      reflectionText: "",
      emojiAfter: "",
      emojiAfterType: "",
      reflectionSummary: "",
      currentStep: 0, // Reset current step
    }),
}));

export default useReflectionStore;
