import { LucideIcon } from 'lucide-react';

export interface PrerequisiteOption {
  label: string;
  url: string;
}

export interface Prerequisite {
  name: string;
  description: string;
  options: PrerequisiteOption[];
}

export interface Platform {
  name: string;
  icon: LucideIcon;
  description: string;
  requirements: string;
  downloadUrl: string;
  version: string;
  prerequisites?: Prerequisite[];
}