"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProxyServer_1 = __importDefault(require("../../proxy/ProxyServer"));
const events_1 = __importDefault(require("../events"));
function start(cmd) {
    const [command, arg] = cmd;
    if (!isNaN(arg)) {
        if (!ProxyServer_1.default.get()) {
            new ProxyServer_1.default(Number(arg), () => {
                console.log(`
        server starting on port: ${arg}
        `);
            });
        }
        else {
            events_1.default.emit('error');
        }
    }
    else {
        events_1.default.emit('error');
    }
}
exports.default = start;
