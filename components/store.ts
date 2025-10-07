import { create } from 'zustand';

interface UIState {
  isMenuOpen: boolean;
  isHeroVisible: boolean;
  currentTab: 'overview' | 'value' | 'documents';
  personalNotes: string;
  setMenuOpen: (isOpen: boolean) => void;
  setHeroVisible: (isVisible: boolean) => void;
  setCurrentTab: (tab: 'overview' | 'value' | 'documents') => void;
  setPersonalNotes: (notes: string) => void;
  toggleMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  isHeroVisible: false,
  currentTab: 'overview',
  personalNotes: '',
  
  setMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
  setHeroVisible: (isVisible: boolean) => set({ isHeroVisible: isVisible }),
  setCurrentTab: (tab: 'overview' | 'value' | 'documents') => set({ currentTab: tab }),
  setPersonalNotes: (notes: string) => set({ personalNotes: notes }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
