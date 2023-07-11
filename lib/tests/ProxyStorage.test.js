"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProxyStorage_1 = require("../src/proxy/ProxyStorage");
const mes = { url: "/index.html",
    headers: { "host": "example.com" } };
test('add request to storage', () => {
    expect((0, ProxyStorage_1.saveRequestInStorage)(mes)).toBeTruthy();
});
test('save response in storage', () => {
    expect((0, ProxyStorage_1.saveResponseInStorage)(mes)).toBeTruthy();
});
test('get all hosts from storage', () => {
    const req1 = { url: "/index.html", headers: { "host": "domain.com" } };
    (0, ProxyStorage_1.saveRequestInStorage)(req1);
    expect((0, ProxyStorage_1.getSavedHosts)().includes("domain.com")).toBeTruthy();
});
test('get all request by host name', () => {
    const req1 = { url: "/index.html", headers: { "host": "domain.com" } };
    (0, ProxyStorage_1.saveRequestInStorage)(req1);
    const domain = (0, ProxyStorage_1.getByHost)("domain.com");
    expect(domain === null || domain === void 0 ? void 0 : domain.requests).toBeDefined();
});
