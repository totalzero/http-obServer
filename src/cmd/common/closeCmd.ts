import Server from "../../proxy/ProxyServer";
import proxyEvents from "../events";
/**
 * this function turn off proxy server
 */
export default function close() {
 Server.get()?.close((err: Error | undefined) => {
    if (err) {
        proxyEvents.emit('error', `Error from close proxy server:
        ${err.name}
        ${err.message}`)
    } else {
 console.log("server has been closed")       
    }
 });
}