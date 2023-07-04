"use strict";
/**
 * This class managing http server and http client
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const displayRequest_1 = __importDefault(require("./logging/displayRequest"));
const serverRequest_1 = __importDefault(require("./serverRequest"));
class Server {
    constructor(port) {
        this._server = http_1.default.createServer((req, res) => {
            (0, displayRequest_1.default)(Object.assign({}, req));
            (0, serverRequest_1.default)(req, res);
        }).listen(port, () => {
            console.log(`server listening on port: ${port}`);
        });
    }
}
exports.default = Server;
