import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SeriesEntity } from '../../series/entities/series.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  name!: string;

  @Column({ select: false })
  password!: string;

  @OneToMany(() => SeriesEntity, series => series.createdBy)
  series!: SeriesEntity[];
}