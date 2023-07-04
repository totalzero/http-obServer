/**
 * This class managing http server and http client
 */

import http from "http"
import { URL, urlToHttpOptions } from "url"
import displayRequest from "./logging/displayRequest";
import requestListener from "./serverRequest";

export default class Server {
private _server: http.Server

constructor(port: number) {
this._server = http.createServer((req, res) => {
    displayRequest({...req});
    requestListener(req, res);
}).listen(port, () => {
        console.log(`server listening on port: ${port}`);
    });

}

}