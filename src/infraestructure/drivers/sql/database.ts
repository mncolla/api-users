import { DataSource } from 'typeorm'
import { UserModel } from './models/user'

export const database = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [UserModel],
    subscribers: [],
    migrations: [],
}).initialize()
