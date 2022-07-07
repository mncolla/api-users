import { DataSource } from "typeorm"
import { UserModel } from '../models/user'

export const DBDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [UserModel],
    subscribers: [],
    migrations: [],
})