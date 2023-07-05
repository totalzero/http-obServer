import { IncomingMessage, request, ServerResponse } from "http";
import { urlToHttpOptions } from "url";
import ProxyDisplay from "./ProxyDisplay";



export default function requestListener(serverRequest: IncomingMessage, serverResponse: ServerResponse, proxyDisplay: ProxyDisplay) {
    proxyDisplay.displayRequest(serverRequest);
    const options = urlToHttpOptions(new URL(serverRequest.url!));
        const clientRequest = request(options, (clientResponse) => {
            proxyDisplay.displayResponse(clientResponse);
        serverResponse.writeHead(clientResponse.statusCode!, clientResponse.statusMessage, clientResponse.headers);
        clientResponse.pipe(serverResponse);
        
                });
                serverRequest.pipe(clientRequest);
 
}