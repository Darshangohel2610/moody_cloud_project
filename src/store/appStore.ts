import { create } from 'zustand';

// Types for our store
export interface User {
  id: string;
  name: string;
  mbti: string;
}

export interface Mood {
  selfieUrl?: string;
  mbti: string;
  favorites: string[];
  timestamp: Date;
}

export interface Recommendation {
  id: string;
  type: 'music' | 'blog' | 'meme';
  title: string;
  description?: string;
  url?: string;
  imageUrl?: string;
}

interface AppState {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Mood state
  mood: Mood | null;
  setMood: (mood: Mood) => void;
  
  // Recommendations state
  recommendations: Recommendation[];
  setRecommendations: (recommendations: Recommendation[]) => void;
  
  // UI state
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Create the store
export const useAppStore = create<AppState>((set) => ({
  // Initial state
  user: {
    id: '1',
    name: 'Demo User',
    mbti: 'INTP'
  },
  mood: null,
  recommendations: [
    // Dummy music recommendations
    {
      id: '1',
      type: 'music',
      title: 'Chill Indie Vibes',
      description: 'Perfect for your introspective mood',
      url: '#',
      imageUrl: 'https://via.placeholder.com/150x150/4A90E2/ffffff?text=Music'
    },
    {
      id: '2',
      type: 'music',
      title: 'Lo-fi Study Beats',
      description: 'Focus and relax with these beats',
      url: '#',
      imageUrl: 'https://via.placeholder.com/150x150/7ED321/ffffff?text=Music'
    },
    {
      id: '3',
      type: 'music',
      title: 'Peaceful Acoustics',
      description: 'Gentle acoustic melodies',
      url: '#',
      imageUrl: 'https://via.placeholder.com/150x150/F5A623/ffffff?text=Music'
    },
    // Dummy blog recommendations
    {
      id: '4',
      type: 'blog',
      title: 'Understanding Your Inner Voice',
      description: 'A deep dive into self-reflection and mindfulness',
      url: '#',
      imageUrl: 'https://via.placeholder.com/300x200/BD10E0/ffffff?text=Blog'
    },
    {
      id: '5',
      type: 'blog',
      title: 'The Art of Slow Living',
      description: 'How to embrace a more peaceful lifestyle',
      url: '#',
      imageUrl: 'https://via.placeholder.com/300x200/50E3C2/ffffff?text=Blog'
    },
    // Dummy meme recommendations
    {
      id: '6',
      type: 'meme',
      title: 'Introvert Energy',
      description: 'When you finally get some alone time',
      url: '#',
      imageUrl: 'https://via.placeholder.com/400x300/D0021B/ffffff?text=Meme'
    },
    {
      id: '7',
      type: 'meme',
      title: 'Peaceful Vibes',
      description: 'Finding zen in everyday moments',
      url: '#',
      imageUrl: 'https://via.placeholder.com/400x300/417505/ffffff?text=Meme'
    }
  ],
  loading: false,

  // Actions
  setUser: (user) => set({ user }),
  setMood: (mood) => set({ mood }),
  setRecommendations: (recommendations) => set({ recommendations }),
  setLoading: (loading) => set({ loading })
}));
