"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const PklLanguageServer_1 = __importDefault(require("./PklLanguageServer"));
let languageServer = null;
function activate() {
    languageServer = new PklLanguageServer_1.default();
}
function deactivate() {
    if (languageServer) {
        languageServer.stop();
        languageServer = null;
    }
}
