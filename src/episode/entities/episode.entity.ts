import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { SeasonEntity } from '../../season/entities/season.entity';
import { FileEntity } from '../../file/entities/file.entity';
import { StreamEntity } from '../../stream/entities/stream.entity';

@Entity('episodes')
export class EpisodeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  title?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToOne(() => SeasonEntity, season => season.episodes)
  season!: SeasonEntity;

  @Column()
  seasonId!: number;

  @ManyToOne(() => FileEntity, file => file.episodes, { nullable: true })
  file?: FileEntity;

  @Column({ nullable: true })
  fileId?: number;

  @ManyToOne(() => StreamEntity, stream => stream.episodes, { nullable: true })
  stream?: StreamEntity;

  @Column({ nullable: true })
  streamId?: number;
}
