"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const url_1 = require("url");
const ProxyStorage_1 = require("./ProxyStorage");
function requestListener(serverRequest, serverResponse, proxyDisplay) {
    proxyDisplay.displayRequest(serverRequest);
    if (!(0, ProxyStorage_1.saveRequestInStorage)(serverRequest)) {
        console.error("error from saving request in storage");
    }
    const options = (0, url_1.urlToHttpOptions)(new URL(serverRequest.url));
    const clientRequest = (0, http_1.request)(options, (clientResponse) => {
        if (!(0, ProxyStorage_1.saveResponseInStorage)(clientResponse)) {
            console.error("wrong from saving response in storage");
        }
        proxyDisplay.displayResponse(clientResponse);
        serverResponse.writeHead(clientResponse.statusCode, clientResponse.statusMessage, clientResponse.headers);
        clientResponse.pipe(serverResponse);
    });
    serverRequest.pipe(clientRequest);
}
exports.default = requestListener;
