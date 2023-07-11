"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * a class thad control sending information about requests and responses to console
 */
class ProxyDisplay {
    constructor() {
        this.gettingRequest = () => {
            console.log("request received");
        };
        this._logLevel = 0;
    }
    /**
     * determines a level of information.
     * @param {number} level - digit values between 0 and 3
     */
    setLogLevel(level) {
        this._logLevel = level;
    }
    /**
     * this method sending information about request to console
     * @param req {DisplayInterface} - request from server
     */
    displayRequest(req) {
        this._req = req;
        switch (this._logLevel) {
            case 3:
                this.gettingRequest();
                this.host();
                this.headers();
                break;
            case 2:
                this.gettingRequest();
                this.host();
                break;
            case 1:
                this.gettingRequest();
                break;
            default:
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
                    this.gettingResponse();
                    break;
                case 2:
                    this.gettingResponse();
                    this.resCode();
                    break;
                case 3:
                    this.gettingResponse();
                    this.resCode();
                    this.resHeaders();
                    break;
                default:
                    break;
            }
        }
    }
    resCode() {
        var _a, _b, _c;
        console.log(`statusCode: ${(_a = this._res) === null || _a === void 0 ? void 0 : _a.statusCode}
    from: ${(_b = this._res) === null || _b === void 0 ? void 0 : _b.url}
    statusMessage: ${(_c = this._res) === null || _c === void 0 ? void 0 : _c.statusMessage}`.trim());
    }
    resHeaders() {
        var _a, _b;
        for (let header in (_a = this._res) === null || _a === void 0 ? void 0 : _a.headers) {
            console.log(`${header}: ${(_b = this._res) === null || _b === void 0 ? void 0 : _b.headers[header]}`);
        }
    }
    gettingResponse() {
        console.log("sending response");
    }
    host() {
        if (this._req) {
            console.log(`
    from: ${this._req.url}
    statusCode: ${this._req.statusCode}
    statusMessage: ${this._req.statusMessage}
    `.trim());
        }
    }
    headers() {
        if (this._req) {
            for (let header in this._req.headers) {
                console.log(`${header}: ${this._req.headers[header]}`);
            }
        }
    }
}
exports.default = ProxyDisplay;
