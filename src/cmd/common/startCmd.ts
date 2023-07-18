import Server from "../../proxy/ProxyServer";
import proxyEvents from "../events"
/**
 * this function starting proxy server with give parameters
 * @param arg { number } -> number of proxy server port
 */
export default function start(arg: string) {
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