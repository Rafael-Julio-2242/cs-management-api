import "reflect-metadata";
import { DataSource } from "typeorm";
import { Enviroment } from "@/core/config/enviroment";

export class Connection {

    private dataSource: DataSource
    private dbConnection: DataSource | null = null

    constructor(private env: Enviroment) {
        this.dataSource = new DataSource({
            type: "postgres",
            host: this.env.DB_HOST,
            port: this.env.DB_PORT,
            username: this.env.DB_NAME,
            password: this.env.DB_PASSWORD,
            database: this.env.DB_NAME,
            entities: [__dirname + "/../../modules/**/*.entity.{ts,js}"],
            migrations: [__dirname + "/migrations/*.{ts,js}"],
            synchronize: false,
        });
    }

    async getDbConnection() {
        if (!this.dbConnection) {
            this.dbConnection = await this.dataSource.initialize();
        }
        return this.dbConnection;
    }

    async closeConnection() {
        if (this.dbConnection) {
            await this.dbConnection.destroy();
            this.dbConnection = null;
        }
    }

}

