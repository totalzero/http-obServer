"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function help() {
    const message = `
 start [number] when [number]    is a port for proxy
 example 
 start 1234 
 
    `;
    return {
        message: message
    };
}
exports.default = help;
