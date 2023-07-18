"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCMD = void 0;
const closeCmd_1 = __importDefault(require("./common/closeCmd"));
const errorCmd_1 = __importDefault(require("./common/errorCmd"));
const exitCmd_1 = __importDefault(require("./common/exitCmd"));
const helpCmd_1 = __importDefault(require("./common/helpCmd"));
const startCmd_1 = __importDefault(require("./common/startCmd"));
const events_1 = __importDefault(require("./events"));
function startCMD() {
    console.log(`
    obServer -> simple proxy http server.
    please help or ? to display how to use
    `);
    process.stdin.on('data', (text) => {
        runCommand(text.toString().toLowerCase().trim().split(' '));
    });
}
exports.startCMD = startCMD;
function runCommand(cmd) {
    switch (cmd[0]) {
        case "help" || "?":
            events_1.default.emit("help");
            break;
        case "start":
            const [command, arg] = cmd;
            events_1.default.emit('start', arg);
            break;
        case "close":
            events_1.default.emit('close');
            break;
        case "exit":
            events_1.default.emit('exit');
            break;
        default:
            events_1.default.emit('error', "unknown command");
            break;
    }
}
events_1.default.on("help", helpCmd_1.default);
events_1.default.on('error', errorCmd_1.default);
events_1.default.on('start', (cmd) => {
    (0, startCmd_1.default)(cmd);
});
events_1.default.on('close', closeCmd_1.default);
events_1.default.on('exit', exitCmd_1.default);
