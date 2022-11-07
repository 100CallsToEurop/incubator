import { Resolutions } from './enums';

export class VideoView {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number;
  createdAt: string;
  publicationDate: string;
  availableResolutions: Resolutions;
}
