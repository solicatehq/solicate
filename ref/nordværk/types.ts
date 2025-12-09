export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  image: string;
}

export interface JournalEntry {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string[];
}