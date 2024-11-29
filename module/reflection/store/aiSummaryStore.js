import { create } from 'zustand';

const useAiSummaryStore = create((set) => ({
  aiSummary: '',
  isLoading: false,
  error: null,
  setAiSummary: (summary) => set({ aiSummary: summary }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  reset: () => set({ aiSummary: '', isLoading: false, error: null }),
}));

export default useAiSummaryStore; 