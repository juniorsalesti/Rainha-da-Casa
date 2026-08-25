export type FunnelStep =
  | 'landing'
  | 'question'
  | 'education'
  | 'mental_load'
  | 'transformation'
  | 'comparison'
  | 'commitment'
  | 'processing'
  | 'diagnosis'
  | 'sales';

export interface QuestionOption {
  id: string;
  text: string;
  emoji?: string;
  tag: 'energy' | 'maintenance' | 'routine' | 'overwhelmed' | 'general';
}

export interface Question {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  options: QuestionOption[];
}

export interface DiagnosisProfile {
  id: string;
  tagMatch: 'energy' | 'maintenance' | 'routine' | 'overwhelmed';
  title: string;
  subtitle: string;
  description: string;
  stressLevel: 'Tranquila' | 'No Sufoco' | 'Sobrecarregada';
  stressPercent: number; // 0 to 100 for gauge
  personalizedBenefits: string[];
  recommendedFocus: string;
}

export interface ProductModule {
  id: number;
  title: string;
  description: string;
  image: string;
  iconName: string;
  badge?: string;
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  estimatedValue: number;
  iconName: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  avatar: string;
  timeAgo: string;
  text: string;
  tag: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
