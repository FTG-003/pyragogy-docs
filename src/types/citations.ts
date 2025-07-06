export interface Citation {
  title: string;
  quote: string;
  authors: string[];
  source: string;
  doi?: string;
  url?: string;
  tags: string[];
  year?: number;
  publicationType?: 'journal' | 'conference' | 'book' | 'report' | 'blog' | 'news';
  verified?: boolean;
}

export interface CitationCardProps {
  title: string;
  quote: string;
  authors: string[];
  source: string;
  doi?: string;
  url?: string;
  tags: string[];
  year?: number;
  publicationType?: 'journal' | 'conference' | 'book' | 'report' | 'blog' | 'news';
  verified?: boolean;
}

export interface CitationStats {
  totalCitations: number;
  verifiedCitations: number;
  uniqueTags: number;
  recentCitations: number;
}

export type PublicationType = 'journal' | 'conference' | 'book' | 'report' | 'blog' | 'news';

export const PUBLICATION_TYPE_LABELS: Record<PublicationType, string> = {
  journal: 'Academic Journal',
  conference: 'Conference Paper',
  book: 'Book Chapter',
  report: 'Research Report',
  blog: 'Blog Post',
  news: 'News Article',
};

export const PUBLICATION_TYPE_ICONS: Record<PublicationType, string> = {
  journal: '📚',
  conference: '🎤',
  book: '📖',
  report: '📄',
  blog: '✍️',
  news: '📰',
}; 