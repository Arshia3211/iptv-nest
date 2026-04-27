import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { SeriesEntity } from '../../series/entities/series.entity';
import { EpisodeEntity } from '../../episode/entities/episode.entity';

@Entity('seasons')
export class SeasonEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  number!: number;

  @Column({ nullable: true })
  title?: string;

  @ManyToOne(() => SeriesEntity, series => series.seasons)
  series!: SeriesEntity;

  @Column()
  seriesId!: number;

  @OneToMany(() => EpisodeEntity, episode => episode.season)
  episodes!: EpisodeEntity[];
}
