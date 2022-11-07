import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Resolutions } from '../../application/types/enums';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ default: false })
  canBeDownloaded: boolean;

  @Column({ nullable: true, default: null })
  minAgeRestriction: number;

  @Column({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ type: 'timestamptz' })
  publicationDate: Date;

  @Column({ nullable: true, enum: Resolutions })
  availableResolutions: Resolutions;
}
