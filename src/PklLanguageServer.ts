class PklLanguageServer {
    languageClient: LanguageClient | null = null

    constructor() {
        nova.config.observe("besya.pkl.language-server-path", (path: string) => {
            this.start(path)
        })
    }

    start(path: string) {
        if (nova.inDevMode()) console.log("Activating Pkl LSP...")

        if (this.languageClient) {
            this.languageClient.stop()
            nova.subscriptions.remove(this.languageClient)
        }

        if (!path) {
            path = "/opt/homebrew/bin/pkl-lsp"
        }

        const serverOptions: ServerOptions = {
            path: path,
        }

        var clientOptions = {
            // debug: nova.inDevMode(),
            syntaxes: ["pkl"],
        }

        var client = new LanguageClient("pkl-langserver", "Pkl Language Server", serverOptions, clientOptions)
        try {
            if (nova.inDevMode()) console.log("Starting Pkl Client...")
            client.start()
            nova.subscriptions.add(client)
            this.languageClient = client
        } catch (err) {
            if (nova.inDevMode()) {
                console.error(err)
            }
        }
    }

    async downloadPackage() {
        console.log("Download")
    }

    stop() {
        if (nova.inDevMode()) console.log("Deactivating Pkl...")

        if (this.languageClient) {
            this.languageClient.stop()
            nova.subscriptions.remove(this.languageClient)
            this.languageClient = null
        }
    }
}

export default PklLanguageServer
