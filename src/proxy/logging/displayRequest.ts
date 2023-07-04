import { IncomingHttpHeaders, IncomingMessage } from "http";
export interface LoggingInterface {
    level0: () => void,
level1: () => void,
level2: () => void,
level3: () => void
}

interface RequestInfo {
url?: string,
statusCode?: number,    
statusMessage?: string
headers: IncomingHttpHeaders
}

/**
 * 
 * @param req 
 * @returns 
 */

export default function displayRequest(req: RequestInfo): LoggingInterface {
let logLevel = 0;

const gettingRequest = () => {
    console.log("request received");
}

const host = () => {
    console.log(`
    from: ${req.url}
    statusCode: ${req.statusCode}
    statusMessage: ${req.statusMessage}
    `)
}

const headers = () => {
    for (let header in req.headers) {
        console.log(`${header}: ${req.headers[header]}`);
    }
}

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
    level0: () => {logLevel = 0;},
    level1: () => {
logLevel = 1;
    },
    level2: () => {logLevel = 2;},
    level3: () => {logLevel = 3;}
}
}
