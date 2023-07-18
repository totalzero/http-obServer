import proxyEvents from "../events";
/**
 *  function to exiting program
 */
export default function exit() {
 proxyEvents.emit('close');
 console.log("good bye");   
 process.exit();
}