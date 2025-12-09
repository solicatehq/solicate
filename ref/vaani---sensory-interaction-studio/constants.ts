import { Project, SoundObject, JournalEntry } from './types';

export const PROJECTS: Project[] = [
  { id: 1, title: "Aetheric Echoes", category: "Spatial Audio Installation", year: "2024", image: "https://picsum.photos/800/1000?grayscale&blur=2" },
  { id: 2, title: "Liquid Metal", category: "Digital Sculpture", year: "2023", image: "https://picsum.photos/800/1001?grayscale&blur=2" },
  { id: 3, title: "Silence V", category: "Brand Identity", year: "2023", image: "https://picsum.photos/800/1002?grayscale&blur=2" },
  { id: 4, title: "Neuroscape", category: "Interactive WebGL", year: "2022", image: "https://picsum.photos/800/1003?grayscale&blur=2" },
  { id: 5, title: "Dust & Frequency", category: "Sonic Architecture", year: "2022", image: "https://picsum.photos/800/1004?grayscale&blur=2" },
];

export const SOUND_OBJECTS: SoundObject[] = [
  { id: 1, title: "Glass Loop", origin: "Dharamshala Field Recording", shapeType: 'torus' },
  { id: 2, title: "Iron Breath", origin: "Industrial Sector 7", shapeType: 'sphere' },
  { id: 3, title: "Static Silk", origin: "Synthetic Generation", shapeType: 'cone' },
  { id: 4, title: "Void Hum", origin: "Anechoic Chamber", shapeType: 'sphere' },
  { id: 5, title: "Rain Data", origin: "Kyoto Monsoon", shapeType: 'torus' },
  { id: 6, title: "Copper Pulse", origin: "Voltage Control", shapeType: 'cone' },
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  { id: 1, type: 'essay', title: "The Architecture of Silence", meta: "Essay • 4 min read", content: "Exploring how negative space in audio creates structural integrity in physical spaces." },
  { id: 2, type: 'audio', title: "Beta Waves", meta: "Sonic Sketch • 02:30", content: "Binaural test for the London installation." },
  { id: 3, type: 'photo', title: "Textures of Decay", meta: "Photography", content: "" },
  { id: 4, type: 'essay', title: "Haptic Feedback in VR", meta: "Research • 6 min read", content: "" },
  { id: 5, type: 'audio', title: "Granular Synthesis", meta: "Tutorial", content: "" },
  { id: 6, type: 'photo', title: "Studio Process", meta: "Behind the Scenes", content: "" },
  { id: 7, type: 'essay', title: "Digital Silk", meta: "Manifesto", content: "" },
  { id: 8, type: 'audio', title: "Resonance Test 04", meta: "Raw Audio", content: "" },
  { id: 9, type: 'photo', title: "Tokyo Nights", meta: "Inspiration", content: "" },
];