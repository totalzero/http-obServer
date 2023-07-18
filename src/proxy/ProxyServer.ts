/**
 * This class managing http server and http client
 */

import http from "http"
import { URL, urlToHttpOptions } from "url"
import ProxyDisplay from "./ProxyDisplay";
import requestListener from "./serverRequest";

export default class Server {
    private static _instance: Server
private _server: http.Server
private _display: ProxyDisplay;

constructor(port: number, listenerCallBack?: Function) {
    this._display = new ProxyDisplay();
    Server._instance = this;
this._server = http.createServer((req, res) => {
    requestListener(req, res, this._display);
}).listen(port, () => {
    listenerCallBack?.();
});
}
static get(): Server | undefined {
    return Server._instance;
}

setLogLevel(level: 1 | 2| 3) {
this._display.setLogLevel(level);
}
}