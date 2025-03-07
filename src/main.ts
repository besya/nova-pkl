import PklLanguageServer from './PklLanguageServer'

let languageServer: PklLanguageServer | null = null

export function activate() {
  languageServer = new PklLanguageServer()
}

export function deactivate() {
  if (languageServer) {
    languageServer.stop()
    languageServer = null
  }
}
