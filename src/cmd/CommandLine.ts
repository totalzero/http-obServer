import help from "./common/helpCmd";
import start from "./common/startCmd";

export function startCMD() {
    console.log(`
    obServer -> simple proxy http server.
    please help or ? to display how to use
    `)
    process.stdin.on('data', (text) => {
        runCommand(text.toString().toLowerCase().trim().split(' '));  
      })   
}

function runCommand(cmd: string[]) {
const writeToConsole = (message: ResultMessage) => {
message?.message ? console.log(message.message) : console.error(message.error)
}

switch (cmd[0]) {
    case "help":
        writeToConsole(help())
        break;
case "start":
start(cmd);
break;
    default:
        console.log("unknown command");
        break;
}

}

export interface ResultMessage {
    message?: string;
    error?: string;
}