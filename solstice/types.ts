export interface Project {
  id: string;
  title: string;
  year: string;
  image: string;
  category: string;
}

export interface Material {
  id: string;
  name: string;
  origin: string;
  description: string;
  texture: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  type: 'Essay' | 'Visual';
  date: string;
  image?: string;
  excerpt?: string;
}