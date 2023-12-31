export default function help() {
    console.log(`
    ObServer - simple http server to watching and writing http requests and responses
    ---
start [port] -> run proxy on port [port]
example:
start 1234
log [number] -> set display log level value
example: log 1 | 2 | 3 
requests -> show domain names 
example: requests
use [domain_name | number] -> select which domain display all requests and responses
example:
 use 1
use example.com
show requests -> display all requests for selected domain
example:
show requests
show responses -> display all responses for selected domain
example:
show responses
show request [number] -> display request from list
example: 
show request 1
show response [number] -> display selected response from list 
example:
show response 1
exit -> close application
close -> close proxy server without exiting 
    `);
}