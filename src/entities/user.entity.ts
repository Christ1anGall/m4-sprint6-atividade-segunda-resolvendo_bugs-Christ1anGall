import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("users")
export class User {
    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column({nullable: true})
    email: string

    @Column()
    password: string

    @CreateDateColumn({
        name:"created_at"
    })
    createdAt: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}