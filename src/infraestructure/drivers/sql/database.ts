import { DataSource } from 'typeorm'
import { UserModel } from './models/user'


export class Database {

    static instance: DataSource;

    constructor() { }

    static async getInstance() {
        if (!Database.instance) {
            Database.instance = new DataSource({
                type: "mysql",
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '3306'),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: true,
                logging: true,
                entities: [UserModel],
                subscribers: [],
                migrations: [],
            })
        }

        return Database.instance;
    }


}