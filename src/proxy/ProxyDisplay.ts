import { IncomingHttpHeaders, IncomingMessage, ServerResponse } from "http";

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
setLogLevel(level: 0 | 1| 2| 3) {
    this._logLevel = level;
}
/**
 * this method sending information about request to console
 * @param req {DisplayInterface} - request from server
 */
displayRequest(req: DisplayInterface) {
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
displayResponse(res: DisplayInterface) {
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

private resCode() {
    console.log(`statusCode: ${this._res?.statusCode}
    from: ${this._res?.url}
    statusMessage: ${this._res?.statusMessage}`.trim())
}

private resHeaders() {
    for (let header in this._res?.headers) {
        console.log(`${header}: ${this._res?.headers[header]}`);
    }
}

private gettingResponse() {
    console.log("sending response");
}

private gettingRequest = () => {
    console.log("request received");
}

private host() {
if (this._req){
    console.log(`
    from: ${this._req.url}
    statusCode: ${this._req.statusCode}
    statusMessage: ${this._req.statusMessage}
    `.trim())
}
}

private headers() {
     if (this._req) {
    for (let header in this._req.headers) {
        console.log(`${header}: ${this._req.headers[header]}`);
    }
}
}


}