import close from "./common/closeCmd";
import error from "./common/errorCmd";
import exit from "./common/exitCmd";
import help from "./common/helpCmd";
import logLevel from "./common/logLevelCmd";
import requests from "./common/requestsCmd";
import show from "./common/showCmd";
import start from "./common/startCmd";
import use from "./common/useCmd";
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
    const [command, arg] = cmd
 switch (command) {
case "help" || "?":
        proxyEvents.emit("help");
        break;
 case "start":
    proxyEvents.emit('start', arg);
 break;
 case "close":
proxyEvents.emit('close');
 break;
 case "exit":
proxyEvents.emit('exit');
 break;
 case "log":
proxyEvents.emit('loglevel', arg)
 break;
 case "requests":
proxyEvents.emit('requests');
 break;
 case "show":
    const [param1, name, number] = cmd;
proxyEvents.emit('show', name, number);
 break;
 case "use":
proxyEvents.emit('use', arg);
 break;
    default:
        proxyEvents.emit('error', "unknown command");
        break;
 }   
}

proxyEvents.on("help",help);
proxyEvents.on('error', error);
proxyEvents.on('start', (cmd: string) => {
start(cmd);
});
proxyEvents.on('close', close);
proxyEvents.on('exit', exit);
proxyEvents.on('loglevel', (level: number) => {
    
if ((level < 1) || (level > 3)) {
proxyEvents.emit('error', "bad display level value");
} else {
    logLevel(level as 1 | 2 | 3);
}
})

proxyEvents.on('requests', requests);
proxyEvents.on('show', show);
proxyEvents.on('use', use);