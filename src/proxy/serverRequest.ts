import { IncomingMessage, request, ServerResponse } from "http";
import { urlToHttpOptions } from "url";


export default function requestListener(serverRequest: IncomingMessage, serverResponse: ServerResponse) {
    const options = urlToHttpOptions(new URL(serverRequest.url!));
    const clientRequest = request(options, (clientResponse) => {
        serverResponse.writeHead(clientResponse.statusCode!, clientResponse.statusMessage, clientResponse.headers);
        clientResponse.pipe(serverResponse);
        
                });
                serverRequest.pipe(clientRequest);
            
}