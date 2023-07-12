import { ResultMessage } from "../CommandLine";

export default function help(): ResultMessage {
    const message = `
 start [number] when [number]    is a port for proxy
 example 
 start 1234 
 
    `
    return {
        message: message
    }
}