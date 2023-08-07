import { IncomingMessage } from "http";
import { getByHost, getSavedHosts, HttpStorage } from "../../proxy/ProxyStorage";

let selectedRequest: HttpStorage | undefined
export default function use(host: number | string) {
const hosts = getSavedHosts();
    if (isNaN(host as number)) {
selectedRequest = getByHost(host as string);
    } else {
        selectedRequest = getByHost(hosts[host as number]);
    }
}

export function getSelectedRequest(): HttpStorage | undefined {
return selectedRequest;
}