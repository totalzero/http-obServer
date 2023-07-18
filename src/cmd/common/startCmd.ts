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
    proxyEvents.emit('error');
}
} else {
    proxyEvents.emit('error');
}
}