"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PklLanguageServer {
    constructor() {
        this.languageClient = null;
        nova.config.observe("besya.pkl.language-server-path", (path) => {
            this.start(path);
        });
    }
    start(path) {
        if (nova.inDevMode())
            console.log("Activating Pkl LSP...");
        if (this.languageClient) {
            this.languageClient.stop();
            nova.subscriptions.remove(this.languageClient);
        }
        if (!path) {
            path = "/opt/homebrew/bin/pkl-lsp";
        }
        const serverOptions = {
            path: path,
        };
        var clientOptions = {
            // debug: nova.inDevMode(),
            syntaxes: ["pkl"],
        };
        var client = new LanguageClient("pkl-langserver", "Pkl Language Server", serverOptions, clientOptions);
        try {
            if (nova.inDevMode())
                console.log("Starting Pkl Client...");
            client.start();
            nova.subscriptions.add(client);
            this.languageClient = client;
        }
        catch (err) {
            if (nova.inDevMode()) {
                console.error(err);
            }
        }
    }
    downloadPackage() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Download");
        });
    }
    stop() {
        if (nova.inDevMode())
            console.log("Deactivating Pkl...");
        if (this.languageClient) {
            this.languageClient.stop();
            nova.subscriptions.remove(this.languageClient);
            this.languageClient = null;
        }
    }
}
exports.default = PklLanguageServer;
