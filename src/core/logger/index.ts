export enum LogType {
    INFO = "INFO",
    ERROR = "ERROR",
    WARNING = "WARNING",
    DEBUG = "DEBUG",
}

export class Logger {

    constructor() {}

    async Log(level: string, logType: LogType, ...message: string[]) {

        let color = "";

        switch (logType) {
            case LogType.INFO:
                color = "\x1b[32m";
                break;
            case LogType.ERROR:
                color = "\x1b[31m";
                break;
            case LogType.WARNING:
                color = "\x1b[33m";
                break;
            case LogType.DEBUG:
                color = "\x1b[0m";
                break;
        }

        console.log(`${color}${level}: ${message.join(" ")}\x1b[0m`);
    }



}
