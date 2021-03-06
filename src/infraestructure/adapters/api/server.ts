import express from 'express';
import * as http from 'http';
import routes from './routes';
import "reflect-metadata"

export class Server {
    private readonly port: string;
    private readonly app: express.Express;
    private httpServer: http.Server;

    constructor(port: string) {
        this.port = port;
        this.app = express();
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(routes)
    }

    async up(): Promise<void> {
        return await new Promise(resolve => {
            this.httpServer = this.app.listen(this.port, () => {
                console.log(`API Server running on port ${this.port}`);
            })
            resolve()
        })
    }

    async down(): Promise<void> {
        return await new Promise((resolve, reject) => {
            if (this.httpServer !== null) {
                this.httpServer.close(error => {
                    if (error !== null) {
                        return reject(error)
                    }
                    return resolve()
                })
            }
            return resolve()
        })
    }
}