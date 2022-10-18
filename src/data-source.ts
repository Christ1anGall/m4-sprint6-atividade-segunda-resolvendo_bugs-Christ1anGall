import { DataSource } from "typeorm";
require('dotenv').config()

const host = process.env.IS_COMPOSE ? "postgres" : "localhost"

export const AppDataSource = new DataSource({
    type: "postgres",
    host,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })