import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { GenreEntity } from '../../genre/entities/genre.entity';
import { SeriesEntity } from '../../series/entities/series.entity';

@Entity('genre_series')
export class GenreSeriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres!: GenreEntity[];

  @ManyToOne(() => SeriesEntity, series => series.genreSeries)
  series!: SeriesEntity;

  @Column()
  seriesId!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
