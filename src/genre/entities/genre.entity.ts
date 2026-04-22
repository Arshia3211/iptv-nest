import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { GenreSeriesEntity } from '../../genre-series/entities/genre-series.entity';
import { StreamEntity } from '../../stream/entities/stream.entity';

@Entity('genres')
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToMany(() => GenreSeriesEntity)
  @JoinTable()
  genreSeries!: GenreSeriesEntity[];

  @ManyToMany(() => StreamEntity)
  @JoinTable()
  streams!: StreamEntity[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
