"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProxyServer_1 = __importDefault(require("../../proxy/ProxyServer"));
const events_1 = __importDefault(require("../events"));
/**
 * this function starting proxy server with give parameters
 * @param arg { number } -> number of proxy server port
 */
function start(arg) {
    if (!isNaN(arg)) {
        if (!ProxyServer_1.default.get()) {
            new ProxyServer_1.default(Number(arg), () => {
                console.log(`
        server starting on port: ${arg}
        `);
            });
        }
        else {
            events_1.default.emit('error', "server has been started. If you want a change port, close the currently running server");
        }
    }
    else {
        events_1.default.emit('error', "wrong port number");
    }
}
exports.default = start;
