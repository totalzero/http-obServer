"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("../cmd/events"));
/**
 * a class thad control sending information about requests and responses to console
 */
class ProxyDisplay {
    constructor() {
        this._logLevel = 1;
    }
    /**
     * determines a level of information.
     * @param {number} level - digit values between 0 and 3
     */
    setLogLevel(level) {
        this._logLevel = Number(level);
    }
    /**
     * this method sending information about request to console
     * @param req {DisplayInterface} - request from server
     */
    displayRequest(req) {
        this._req = req;
        switch (this._logLevel) {
            case 3:
                this.to();
                this.requestLine();
                this.displayHeaders(this._req);
                break;
            case 2:
                this.to();
                this.requestLine();
                break;
            case 1:
                this.to();
                break;
            default:
                events_1.default.emit('error', "unknown log level");
                break;
        }
    }
    /**
     *  this method sending information about response to console
     * @param res {DisplayInterface} - response from http.request
     */
    displayResponse(res) {
        this._res = res;
        if (this._res) {
            switch (this._logLevel) {
                case 1:
                    this.from();
                    break;
                case 2:
                    this.from();
                    this.responseLine();
                    break;
                case 3:
                    this.from();
                    this.responseLine();
                    this.displayHeaders(this._res);
                    break;
                default:
                    events_1.default.emit('error', "unknown log level");
                    break;
            }
        }
    }
    to() {
        var _a;
        console.log(`to: ${(_a = this._req) === null || _a === void 0 ? void 0 : _a.headers['host']}`);
    }
    from() {
        var _a;
        console.log(`from: ${(_a = this._res) === null || _a === void 0 ? void 0 : _a.headers['host']}`);
    }
    requestLine() {
        const rq = this._req;
        const method = rq.method;
        const http = rq.httpVersion;
        const path = rq.url;
        console.log(`${method} ${path} HTTP/${http}`);
    }
    responseLine() {
        const rs = this._res;
        const http = rs.httpVersion;
        const statusCode = rs.statusCode;
        const statusMessage = rs.statusMessage;
        console.log(`HTTP/${http} ${statusCode} ${statusMessage}`);
    }
    displayHeaders(rqs) {
        for (let header in rqs.headers) {
            console.log(`${header}: ${rqs.headers[header]}`);
        }
    }
}
exports.default = ProxyDisplay;
