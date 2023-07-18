import error from "./common/errorCmd";
import help from "./common/helpCmd";
import start from "./common/startCmd";
import proxyEvents from "./events";


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
 switch (cmd[0]) {
    case "help" || "?":
        proxyEvents.emit("help");
        break;
 case "start":
proxyEvents.emit('start', cmd);
 break;
    default:
        proxyEvents.emit('error', "unknown command");
        break;
 }   
}

proxyEvents.on("help",help);
proxyEvents.on('error', error);
proxyEvents.on('start', (cmd: string[]) => {
start(cmd);
});
