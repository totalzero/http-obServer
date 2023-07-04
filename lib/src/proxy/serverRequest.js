"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const url_1 = require("url");
const displayRequest_1 = __importDefault(require("./logging/displayRequest"));
function requestListener(serverRequest, serverResponse) {
    const options = (0, url_1.urlToHttpOptions)(new URL(serverRequest.url));
    const clientRequest = (0, http_1.request)(options, (clientResponse) => {
        serverResponse.writeHead(clientResponse.statusCode, clientResponse.statusMessage, clientResponse.headers);
        clientResponse.pipe(serverResponse);
    });
    serverRequest.pipe(clientRequest);
    return (0, displayRequest_1.default)(serverRequest);
}
exports.default = requestListener;
