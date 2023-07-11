import { IncomingMessage } from "http"
import { getByHost, getSavedHosts, saveRequestInStorage, saveResponseInStorage } from "../src/proxy/ProxyStorage";

const mes = {url: "/index.html",
headers: {"host": "example.com"}};

test('add request to storage', () => {
expect(saveRequestInStorage(mes as IncomingMessage)).toBeTruthy();
})

test('save response in storage', () => {
  expect(saveResponseInStorage(mes as IncomingMessage)).toBeTruthy();  
})

test('get all hosts from storage', () => {
  const req1 = {url: "/index.html", headers: {"host": "domain.com"}}   as IncomingMessage;
  saveRequestInStorage(req1);
  expect(getSavedHosts().includes("domain.com")).toBeTruthy();
})

test('get all request by host name', () => {
  const req1 = {url: "/index.html", headers: {"host": "domain.com"}}   as IncomingMessage;
  saveRequestInStorage(req1);
const domain = getByHost("domain.com");
expect(domain?.requests).toBeDefined();  
})