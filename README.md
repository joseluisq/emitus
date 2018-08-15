# Emitus [![npm](https://img.shields.io/npm/v/emitus.svg)](https://www.npmjs.com/package/emitus) [![npm](https://img.shields.io/npm/dt/emitus.svg)](https://www.npmjs.com/package/emitus) [![Build Status](https://travis-ci.org/joseluisq/emitus.svg?branch=master)](https://travis-ci.org/joseluisq/emitus) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Small [Typescript](https://www.typescriptlang.org/) [Event Emitter](https://nodejs.org/api/events.html). :zap:

__Some differences with Mitt__

[Mitt](https://github.com/developit/mitt) is a pretty cool and very small event emitter library out there, but __Emitus__ differs with it in some aspects such as:

- Emitus has been written and tested entirely in [Typescript](./src/index.ts).
- It uses an array of events instead of a hash.
- It uses a simple `for()` iteration loop with `if()` controls, no map functions or coercion.
- It doesn't support 'emit-all' or some wildcard feature.
- Its size is just `285bytes` minimized + gzipped (UMD) and `844bytes` (CommonJS).

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add emitus --dev
```

[NPM](https://www.npmjs.com/)

```sh
npm install emitus --save-dev
```

[UMD](https://github.com/umdjs/umd/) file is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/emitus/dist/emitus.umd.min.js"></script>
```

You can also use the library via `window.emitus`.

## Usage

```ts
import { emitus, EmitusListener } from 'emitus'

interface Args { a: number, b: string }

const myArgs: Args = { a: 1, b: '2' }
const myEvent: EmitusListener<Args> = (name, args) => console.log(name, args)

const e = emitus()
e.on('MY_EVENT', myEvent)
e.emit('MY_EVENT', myArgs)
```

## API

### on

Register a custom event listener.

```ts
e.on (type: string, func: EmitusListener): void
```

### off

Unregister a custom event listener.

```ts
e.off (type: string, func?: EmitusListener): void
```

### emit

Calls listener registered for the event named `eventName` passing the supplied arguments.

```ts
e.emit (eventName: string, myArgs?: any): void
```

## Contributions
Feel free to send some [pull request](https://github.com/joseluisq/emitus/pulls) or [issues](https://github.com/joseluisq/emitus/issues).

## License
MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
