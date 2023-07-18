"use strict";
/**
 * This class managing http server and http client
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const ProxyDisplay_1 = __importDefault(require("./ProxyDisplay"));
const serverRequest_1 = __importDefault(require("./serverRequest"));
class Server {
    constructor(port, listenerCallBack) {
        this._display = new ProxyDisplay_1.default();
        Server._instance = this;
        this._server = http_1.default.createServer((req, res) => {
            (0, serverRequest_1.default)(req, res, this._display);
        }).listen(port, () => {
            listenerCallBack === null || listenerCallBack === void 0 ? void 0 : listenerCallBack();
        });
    }
    static get() {
        return Server._instance;
    }
    setLogLevel(level) {
        this._display.setLogLevel(level);
    }
    close(callBack) {
        this._server.close(callBack);
        Server._instance = undefined;
    }
}
exports.default = Server;
