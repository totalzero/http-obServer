/**
 * This class managing http server and http client
 */

import http from "http"
import { URL, urlToHttpOptions } from "url"
import requestListener from "./serverRequest";

export default class Server {
private _server: http.Server

constructor(port: number) {
this._server = http.createServer(requestListener).listen(port, () => {
        console.log(`server listening on port: ${port}`);
    });
}

}