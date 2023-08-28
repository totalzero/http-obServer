import { IncomingMessage, request, ServerResponse } from "http";
import { urlToHttpOptions } from "url";
import ProxyDisplay from "./ProxyDisplay";
import { saveRequestInStorage, saveResponseInStorage } from "./ProxyStorage";



export default function requestListener(serverRequest: IncomingMessage, serverResponse: ServerResponse, proxyDisplay: ProxyDisplay) {
    proxyDisplay.displayRequest(serverRequest);
    if (!saveRequestInStorage(serverRequest)) {
console.error("error from saving request in storage");
    }
    const options = urlToHttpOptions(new URL(serverRequest.url!));
        const clientRequest = request(options, (clientResponse) => {
            clientResponse.url = serverRequest.url
            clientResponse.headers['host'] = serverRequest.headers['host'];
            if (! saveResponseInStorage(clientResponse)) {
console.error("wrong from saving response in storage");
            }
            proxyDisplay.displayResponse(clientResponse);
        serverResponse.writeHead(clientResponse.statusCode!, clientResponse.statusMessage, clientResponse.headers);
        clientResponse.pipe(serverResponse);
        
                });
                serverRequest.pipe(clientRequest);
 
}