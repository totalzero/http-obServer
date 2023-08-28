import { IncomingMessage } from "http";
import proxyEvents from "../events";
import { getSelectedRequest } from "./useCmd";

/*
show requests - wyswietla wszystkie requesty
show responses - wyswietla wszystkie responses
show request [ktory] wyswietla wybrany request
show response [ktory] wyswietla wybrany response
*/
export default function show(req: string, whichReq?: number) {
 switch (req) {
    case "requests":
showRequests();        
        break;
 case "request":
showRequest(whichReq);
 break;
 case "responses":
showResponses();
 break;
 case "response":
showResponse(whichReq);
 break;
    default:
        proxyEvents.emit('error', "error from show: bad arguments of " + req);
        break;
 }   
}

function showRequests() {
    const requests = getSelectedRequest()?.requests
 let result = ''
 if (requests) {
requests.forEach((value, index) => {
    result += index + ": " + value.url + '\n'
})
 } else {
    result = 'nothink requests';
 }

 console.log(result);
}

function showRequest(reqPosition?: number) {
    const requests = getSelectedRequest()?.requests
    let result =''
if (!reqPosition) {
    proxyEvents.emit('error', "error from show request: wrong position argument");
    return ;
}

if (requests) {
const req = requests[reqPosition];
result = `
${req.method} ${req.url} HTTP/${req.httpVersion}

`
for (let header in req.headers) {
    result += `${header}: ${req.headers[header]}
    `
}
req.setEncoding('utf-8');
result += '\n' +  req.toString();
} else {
    result = 'nothink selected request';
}

console.log(result);
}

function showResponses() {
const responses = getSelectedRequest()?.responses;
let result = '';

if (responses) {
responses.forEach((value, index) => {
    result += index + ": " + value.url + '\n';
})
} else {
result = "nothink responses";
}

console.log(result);
}

function showResponse(resPosition?: number) {
    const responses = getSelectedRequest()?.responses;
    let result = '';
    if (!resPosition) {
        proxyEvents.emit('error', "error from show response: wrong position argument");
        return ;
    }

 if (responses) {
const res = responses[resPosition];
result += `HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage} \n`;
for (let header in res.headers) {
    result += `${header}: ${res.headers[header]} \n`;
}
res.setEncoding('utf-8');
result += res.toString();

 }    else {
result += "nothink selected response";
 }
 console.log(result);
}