"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const displayRequest_1 = __importDefault(require("../src/proxy/logging/displayRequest"));
test('show request received from displayRequest with level0', () => {
    let storage = "";
    const log = (data) => { storage += data; };
    console.log = log;
    (0, displayRequest_1.default)({ headers: { "accept-language": "pl-pl" } }).level0();
    expect(storage).toContain("request received");
});
