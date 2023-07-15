import Server from "../../proxy/ProxyServer";
import { ResultMessage } from "../CommandLine";

export default function start(cmd: string[]): ResultMessage {
 if ((cmd[0] == "start") && (typeof Number(cmd[1]) == "number")) {
if (Server.get()) {
    return {error: "server is running now"}
} else {
    new Server(Number(cmd[1]))
return {
    message: `server start on port: ${cmd[1]}`
}
}
 }   
return {error:"start: bad arguments"}
}