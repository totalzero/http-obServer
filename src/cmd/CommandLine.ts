import help from "./common/helpCmd";

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
message?.message ? console.log(message.message) : console.log(message.error)
}

switch (cmd[0]) {
    case "help":
        writeToConsole(help())
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