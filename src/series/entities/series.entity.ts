import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { GenreSeriesEntity } from '../../genre-series/entities/genre-series.entity';
import { SeasonEntity } from '../../season/entities/season.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('series')
export class SeriesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToOne(() => UserEntity, user => user.series)
  @JoinColumn({ name: 'createdById' })
  createdBy!: UserEntity;

  @Column()
  createdById!: number;

  @ManyToMany(() => GenreSeriesEntity)
  @JoinTable()
  genreSeries!: GenreSeriesEntity[];

  @OneToMany(() => SeasonEntity, season => season.series)
  seasons!: SeasonEntity[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
