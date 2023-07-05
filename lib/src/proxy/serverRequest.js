"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const url_1 = require("url");
function requestListener(serverRequest, serverResponse, proxyDisplay) {
    proxyDisplay.displayRequest(serverRequest);
    const options = (0, url_1.urlToHttpOptions)(new URL(serverRequest.url));
    const clientRequest = (0, http_1.request)(options, (clientResponse) => {
        proxyDisplay.displayResponse(clientResponse);
        serverResponse.writeHead(clientResponse.statusCode, clientResponse.statusMessage, clientResponse.headers);
        clientResponse.pipe(serverResponse);
    });
    serverRequest.pipe(clientRequest);
}
exports.default = requestListener;
