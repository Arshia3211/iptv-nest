import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { EpisodeEntity } from '../../episode/entities/episode.entity';
import { StreamEntity } from '../../stream/entities/stream.entity';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
  uploadedBy: any;
}
