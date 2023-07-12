"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCMD = void 0;
const helpCmd_1 = __importDefault(require("./common/helpCmd"));
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
    const writeToConsole = (message) => {
        (message === null || message === void 0 ? void 0 : message.message) ? console.log(message.message) : console.log(message.error);
    };
    switch (cmd[0]) {
        case "help":
            writeToConsole((0, helpCmd_1.default)());
            break;
        default:
            console.log("unknown command");
            console.log(`command: ${cmd[0]}`);
            break;
    }
}
