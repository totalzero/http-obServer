import { IncomingHttpHeaders, IncomingMessage, ServerResponse } from "http";
import proxyEvents from "../cmd/events";

interface DisplayInterface {
    url?: string,
    statusCode?: number;
    statusMessage?: string;
headers: IncomingHttpHeaders;    
}

/**
 * a class thad control sending information about requests and responses to console
 */
export default class ProxyDisplay {

private _logLevel: number;
private _req: DisplayInterface | undefined;
private _res: DisplayInterface | undefined;

constructor() {
    this._logLevel = 1;
}
/**
 * determines a level of information. 
 * @param {number} level - digit values between 0 and 3 
 */
setLogLevel(level: number) {
    this._logLevel = Number(level);
}
/**
 * this method sending information about request to console
 * @param req {DisplayInterface} - request from server
 */
displayRequest(req: DisplayInterface) {
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
                proxyEvents.emit('error', "unknown log level");
                break;
        }
        
}
/**
 *  this method sending information about response to console
 * @param res {DisplayInterface} - response from http.request
 */
displayResponse(res: DisplayInterface) {
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
    proxyEvents.emit('error', "unknown log level");
        break;
}
}
}

private to() {
    console.log(`to: ${this._req?.headers['host']}`);
}

private from() {
    console.log(`from: ${this._res?.headers['host']}`);
}

private requestLine() {
    const rq = this._req as IncomingMessage;
    const method = rq.method;
    const http = rq.httpVersion;
    const path = rq.url;
console.log(`${method} ${path} HTTP/${http}`);
}

private responseLine() {
    const rs = this._res as IncomingMessage;
    const http = rs.httpVersion;
    const statusCode = rs.statusCode;
    const statusMessage = rs.statusMessage;
    console.log(`HTTP/${http} ${statusCode} ${statusMessage}`);
}

private displayHeaders(rqs: DisplayInterface) {
    for (let header in rqs.headers) {
        console.log(`${header}: ${rqs.headers[header]}`);
    }
}

}