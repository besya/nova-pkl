# Pkl

**Pkl** extension provides rich support for the [Pkl configuration language](https://pkl-lang.org) in Nova.

![Example](https://raw.githubusercontent.com/besya/nova-pkl/refs/heads/main/examples/example.png)

## Prequesites

### Install Pkl and Pkl LSP

```
brew install pkl pkl-lsp
```

## Language Support

- Diagnostics
- Hover
- Go to definition
- Auto complete
- Project syncing
- Package downloading

## Development

1. Clone repo

    `git clone https://github.com/besya/nova-pkl.git`

1. Add tree-sitter-pkl git submodule
    `git submodule add --force https://github.com/apple/tree-sitter-pkl.git`

1. Navigate to project folder

    `cd nova-pkl`

1. Install dependencies

    `npm install`

1. Run watch

    `npm run watch`

1. Enable extension

    **Extensions > Activate Project as Extension**

### NPM commands

Clean (cleans `pkl.novaextension/Scripts` directory)

`npm run clean`

Build (builds `src` to `pkl.novaextension/Scripts`)

`npm run build`

Watch (rebuilds `src` to `pkl.novaextension/Scripts` on `src` change)

`npm run watch`

Compile (compiles tree-sitter-pkl.dylib)

`npm run compile`

Sign (codesign tree-sitter-pkl.dylib)

`npm run sign`
