import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { EpisodeEntity } from '../../episode/entities/episode.entity';
import { StreamEntity } from '../../stream/entities/stream.entity';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  filename?: string;

  @Column()
  path!: string;

  @Column()
  mimetype!: string;

  @Column('bigint')
  size!: number;

  @OneToMany(() => EpisodeEntity, episode => episode.file)
  episodes!: EpisodeEntity[];

  @OneToMany(() => StreamEntity, stream => stream.file)
  streams!: StreamEntity[];
}
