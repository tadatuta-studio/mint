# Mint

## Installation requirements

- [Node.js](http://nodejs.org) is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

## Installation

So, how easy is it to get started with BEM?  *Super easy*.

It's as easy as...

    git clone https://github.com/bem/project-stub.git -b bem-core my-bem-project
    cd my-bem-project
    npm install

## Usage

Now you can run any bem-tools commands from a `./node_modules/bem/bin/bem` directory.
To be able to run bem-tools commands without typing a full path to an executable file (node_modules/bem/bin/bem), use bem-cli npm package:

`npm install -g bem-cli` or use an alternative method `export PATH=./node_modules/.bin:$PATH`

**Start the server:**

```bash
bem server # bem server -p 8080 -v info|silly|debug|verbose|warn|error
```

> **hint:** execute the above commands in your terminal

Now that `bem server ` is running, check it out:

    navigate to: http://localhost:8080/desktop.bundles/index/index.html

Stopping the server is also easy, pressing `Ctrl` + `C` while the terminal is your active window will stop the server.

**Add block:**

    bem create -l desktop.blocks -b newBlock

**Add page:**

    bem create -l desktop.bundles -b page

## Docs

- [Full stack quick start](http://bem.info/articles/start-with-project-stub/)
- [Tutorial on BEMHTML](http://bem.info/libs/bem-core/2.0.0/bemhtml/reference/)
- [Tutorial on bem-js](http://bem.info/tutorials/bem-js-tutorial/)
- [Commands bem-tools](http://bem.info/tools/bem/bem-tools/commands/)
