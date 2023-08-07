import Server from "../../proxy/ProxyServer";
import proxyEvents from "../events";

export default function logLevel(level: 1 | 2 | 3) {
if (Server.get()) {
Server.get()?.setLogLevel(level);
console.log(`display info set on ${level}`);
} else {
    proxyEvents.emit('error', "the server is not running");;
}
}