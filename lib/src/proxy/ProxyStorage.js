"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByHost = exports.getSavedHosts = exports.saveResponseInStorage = exports.saveRequestInStorage = void 0;
const storage = new Map();
function saveRequestInStorage(req) {
    var _a;
    const reqstorage = storage.get(req.headers["host"]);
    if (reqstorage) {
        (_a = reqstorage === null || reqstorage === void 0 ? void 0 : reqstorage.requests) === null || _a === void 0 ? void 0 : _a.push(req);
        return true;
    }
    else {
        storage.set(req.headers["host"], { requests: [req], responses: [] });
        return true;
    }
    return false;
}
exports.saveRequestInStorage = saveRequestInStorage;
function saveResponseInStorage(res) {
    var _a;
    const resStorage = storage.get(res.headers["host"]);
    if (resStorage) {
        (_a = resStorage === null || resStorage === void 0 ? void 0 : resStorage.responses) === null || _a === void 0 ? void 0 : _a.push(res);
        return true;
    }
    else {
        storage.set(res.headers["host"], { responses: [res] });
        return true;
    }
    return false;
}
exports.saveResponseInStorage = saveResponseInStorage;
function getSavedHosts() {
    const hosts = [];
    for (let key of storage.keys()) {
        hosts.push(key);
    }
    return hosts;
}
exports.getSavedHosts = getSavedHosts;
function getByHost(name) {
    return storage.get(name);
}
exports.getByHost = getByHost;
