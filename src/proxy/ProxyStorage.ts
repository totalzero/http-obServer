import { IncomingMessage } from "http";

export interface HttpStorage {
 requests?: IncomingMessage[];
 responses?: IncomingMessage[];
}

const storage: Map<string, HttpStorage> = new Map<string, HttpStorage>();

export function saveRequestInStorage(req: IncomingMessage): boolean {
req.on('data', (text) => {
    req.toString = (): string => {
return text;
    }
});

const reqstorage = storage.get(req.headers["host"]!);
if (reqstorage) {
    reqstorage?.requests?.push(req);
    return true;
} else {
    storage.set(req.headers["host"]!, {requests: [req], responses: []});
    return true;
}
return false;
}

export function saveResponseInStorage(res: IncomingMessage): boolean {
    res.on('data', (text) => {
res.toString = () => {
return text;
}
    });

const resStorage = storage.get(res.headers["host"]!);
    if (resStorage) {
        resStorage?.responses?.push(res);
        return true;
    } else {
        storage.set(res.headers["host"]!, {responses: [res]})
        return true;
    }
    return false;
}

export function getSavedHosts(): string[] {
const hosts = [];
for (let key of storage.keys()) {
    hosts.push(key);
}
return hosts;
}

export function getByHost(name: string): HttpStorage | undefined {
return storage.get(name);
}