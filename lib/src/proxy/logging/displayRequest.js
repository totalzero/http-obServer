"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param req
 * @returns
 */
function displayRequest(req) {
    let logLevel = 0;
    const gettingRequest = () => {
        console.log("request received");
    };
    const host = () => {
        console.log(`
    from: ${req.url}
    statusCode: ${req.statusCode}
    statusMessage: ${req.statusMessage}
    `);
    };
    const headers = () => {
        for (let header in req.headers) {
            console.log(`${header}: ${req.headers[header]}`);
        }
    };
    switch (logLevel) {
        case 3:
            gettingRequest();
            host();
            headers();
            break;
        case 2:
            gettingRequest();
            host();
            break;
        case 1:
            gettingRequest();
            break;
        case 0:
            gettingRequest();
            break;
        default:
            break;
    }
    return {
        level0: () => { logLevel = 0; },
        level1: () => {
            logLevel = 1;
        },
        level2: () => { logLevel = 2; },
        level3: () => { logLevel = 3; }
    };
}
exports.default = displayRequest;
