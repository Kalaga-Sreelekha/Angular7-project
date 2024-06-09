//browser console
//email
//db

export interface ILogger{
    Log():any;
}
export class BaseLogger implements ILogger{
 Log(){

 }
}
export class ConsoleLogger extends BaseLogger{
    override Log() {
        console.log("using console logger")
    }
}

export class DbLogger extends BaseLogger{
    override Log() {
        console.log("using db logger")
    }
}

export class FIleLogger extends BaseLogger{
    override Log() {
        console.log("using file logger")
    }
}