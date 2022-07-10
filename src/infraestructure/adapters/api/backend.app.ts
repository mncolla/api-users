import { Server } from "./server";

export class LoginApp {
    server?: Server

    async start(): Promise<void> {
        const port: string = process.env.PORT ?? '3000'
        this.server = new Server(port)
        return await this.server.up()
    }

    async stop(): Promise<void> {
        return await this.server?.down()
    }
}