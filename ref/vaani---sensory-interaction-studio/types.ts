export enum CursorType {
  DEFAULT = 'DEFAULT',
  HOVER = 'HOVER',
  VIEW = 'VIEW',
  LISTEN = 'LISTEN',
  DRAG = 'DRAG'
}

export interface SoundObject {
  id: number;
  title: string;
  origin: string;
  shapeType: 'sphere' | 'torus' | 'cone';
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface JournalEntry {
  id: number;
  type: 'essay' | 'audio' | 'photo';
  title: string;
  meta: string;
  content?: string;
}