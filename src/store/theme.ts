import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'dark' | 'light';

export type ThemeAction = {
  setTheme: () => void;
};

export type ThemeState = {
  theme: Theme;
};

export const useTheme = create<ThemeAction & ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
    }),
    {
      name: 'theme',
      partialize: (state) => ({
        theme: state.theme
      })
    }
  )
);
