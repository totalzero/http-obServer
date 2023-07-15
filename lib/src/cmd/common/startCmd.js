"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProxyServer_1 = __importDefault(require("../../proxy/ProxyServer"));
function start(cmd) {
    if ((cmd[0] == "start") && (typeof Number(cmd[1]) == "number")) {
        if (ProxyServer_1.default.get()) {
            return { error: "server is running now" };
        }
        else {
            new ProxyServer_1.default(Number(cmd[1]));
            return {
                message: `server start on port: ${cmd[1]}`
            };
        }
    }
    return { error: "start: bad arguments" };
}
exports.default = start;
