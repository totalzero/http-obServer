/**
 * This class managing http server and http client
 */

import http from "http"
import { URL, urlToHttpOptions } from "url"
import ProxyDisplay from "./ProxyDisplay";

import requestListener from "./serverRequest";

export default class Server {
    private static _server?: Server
private _server: http.Server
private _display: ProxyDisplay;

constructor(port: number) {
    this._display = new ProxyDisplay();
this._server = http.createServer((req, res) => {
    requestListener(req, res, this._display);
}).listen(port, () => {
        console.log(`server listening on port: ${port}`);
    });
Server._server = this;
}
static get(): Server | undefined {
    return Server._server
}
setLogLevel(level: 1 | 2| 3) {
this._display.setLogLevel(level);
}
}