import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn() id: number;
  @Column('text') title: string;
  @Column('text') description: string;
  @Column() filename: string;
  @Column('int') likes: number;
  @Column() isPublished: boolean;
  @Column() authorId: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
