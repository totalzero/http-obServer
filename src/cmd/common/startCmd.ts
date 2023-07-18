import Server from "../../proxy/ProxyServer";
import proxyEvents from "../events"

export default function start(cmd: string[]) {
const [command, arg] = cmd
if (!isNaN((arg as unknown) as number)) {
    if (!Server.get()) {
    new Server(Number(arg), () => {
        console.log(`
        server starting on port: ${arg}
        `);
    });
} else {
    proxyEvents.emit('error', "server has been started. If you want a change port, close the currently running server");
}
} else {
    proxyEvents.emit('error', "wrong port number");
}
}