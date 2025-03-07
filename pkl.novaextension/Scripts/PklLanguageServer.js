"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PklLanguageServer {
    constructor() {
        this.languageClient = null;
        nova.config.observe('besya.pkl.language-server-path', (path) => {
            this.start(path);
        });
    }
    start(path = '/opt/homebrew/bin/pkl-lsp') {
        if (nova.inDevMode())
            console.log('Activating Pkl LSP...');
        if (this.languageClient) {
            this.languageClient.stop();
            nova.subscriptions.remove(this.languageClient);
        }
        const serverOptions = {
            path: path,
        };
        const clientOptions = {
            // debug: nova.inDevMode(),
            syntaxes: ['pkl'],
        };
        const client = new LanguageClient('pkl-langserver', 'Pkl Language Server', serverOptions, clientOptions);
        try {
            if (nova.inDevMode())
                console.log('Starting Pkl Client...');
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
    stop() {
        if (nova.inDevMode())
            console.log('Deactivating Pkl...');
        if (this.languageClient) {
            this.languageClient.stop();
            nova.subscriptions.remove(this.languageClient);
            this.languageClient = null;
        }
    }
}
exports.default = PklLanguageServer;
