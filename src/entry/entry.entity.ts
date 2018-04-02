import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'user/user.entity';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn() id: number;
  @Column('text') description: string;
  @Column() filename: string;
  @Column('int') likes: number;
  @Column() isPublished: boolean;
  @ManyToOne(type => User, user => user.entries)
  user: User;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
