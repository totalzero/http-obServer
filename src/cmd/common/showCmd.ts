import proxyEvents from "../events";
import { getSelectedRequest } from "./useCmd";

/*
jezeli parametr = requests to wyswietl wszystkie zapytania do servera.
jezeli parametr bedzie response a drugi argument bedzie mial wartosc number to 
wyswietl request[number] a nastepnie response dla tego requesta
*/
export default function show(req: string, whichReq?: number) {
 switch (req) {
    case "requests":
showRequests();        
        break;
 case "request":
if (whichReq) {
    showOneRequest(Number(whichReq));
} else {
    proxyEvents.emit("error", "")
}
 break;
    default:
        console.log("i dont know what i am showing");
        break;
 }   
}

function showRequests() {
 const requests = getSelectedRequest()?.requests;
 if (requests) {
requests.forEach((req, index) => {
    console.log(`${index}: ${req.url}`);
}) 
 }
 }

function showOneRequest(position: number) {
    const requests = getSelectedRequest()!.requests;   
    const responses = getSelectedRequest()!.responses;
    //if (requests  responses) {
        const req = requests[position];
        const res = responses[position];
        req.setEncoding("utf-8");
        res.setEncoding("utf-8");
 console.log("Request:");
 console.log(`
 ${req.method} ${req.url} HTTP/${req.httpVersion}
 `);       
 for (let header in req.headers) {
    console.log(`${header}: ${req.headers[header]}`);
    console.log(req.toString());
    console.log("Response:");
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
 for (let header in res.headers) {
    console.log(`${header}: ${res.headers[header]}`);
    console.log(res.toString());
 }
 }
    //} else {
        //console.log("jakis blad");
    //}
}