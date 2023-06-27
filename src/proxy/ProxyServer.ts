/**
 * This class managing http server and http client
 */

import http from "http"
import { URL, urlToHttpOptions } from "url"

export default class Server {
private _server: http.Server

constructor(port: number) {
    this._server = http.createServer((serverRequest, serverResponse) => {
        const options = urlToHttpOptions(new URL(serverRequest.url!));
        const clientRequest = http.request(options, (clientResponse) => {
serverResponse.writeHead(clientResponse.statusCode!, clientResponse.statusMessage, clientResponse.headers);
clientResponse.pipe(serverResponse);

        });
        serverRequest.pipe(clientRequest);
    }).listen(port, () => {
        console.log(`server listening on port: ${port}`);
    });
}

}