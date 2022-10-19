import { join } from "path";
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Cart } from "./cart.entity";

@Entity("users")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  password: string;

  @OneToOne((type) => Cart, {
    eager: true,
  })
  @JoinColumn()
  cart: Cart;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
