import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Entry } from 'entry/entry.entity';

@Entity()
export class User {
  @PrimaryColumn() id: string;
  @Column('text') name: string;
  @Column() picture: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;

  @OneToMany(type => Entry, entry => entry.user)
  entries: Entry[];
}
