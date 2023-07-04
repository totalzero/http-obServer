"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProxyServer_1 = __importDefault(require("./proxy/ProxyServer"));
const proxy = new ProxyServer_1.default(4000);
