import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity("carts")
export class Cart {

    @PrimaryColumn('uuid')
    readonly id: string

    @Column('float')
    subtotal: number

    @CreateDateColumn({
        name: "created_at"
    })
    createdAt: Date

    @UpdateDateColumn({
        name:"updated_at"
    })
    updatedAt: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}