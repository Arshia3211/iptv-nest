import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { GenreEntity } from '../../genre/entities/genre.entity';
import { EpisodeEntity } from '../../episode/entities/episode.entity';
import { FileEntity } from '../../file/entities/file.entity';

@Entity('streams')
export class StreamEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @Column({ nullable: true })
  title?: string;

  @ManyToOne(() => EpisodeEntity, episode => episode.stream, { nullable: true })
  episode?: EpisodeEntity;

  @Column({ nullable: true })
  episodeId?: number;

  @ManyToOne(() => FileEntity, file => file.streams, { nullable: true })
  file?: FileEntity;

  @Column({ nullable: true })
  fileId?: number;

  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres!: GenreEntity[];

  @OneToMany(() => EpisodeEntity, episode => episode.stream)
  episodes!: EpisodeEntity[];
}
