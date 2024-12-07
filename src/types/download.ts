export interface DownloadTarget {
  url: string;
  asset: string;
  stat: string;
}

export interface PrerequisiteItem {
  url: string;
  label: string;
}

export interface SoftwarePrerequisite {
  label: string;
  description: string;
  items: PrerequisiteItem[];
  source: PrerequisiteItem;
}

export interface Platform {
  label: string;
  executionTarget: string;
  deviceTypes: string;
  requirements: string;
  targets: DownloadTarget[];
  prerequisite?: SoftwarePrerequisite;
}