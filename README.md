# Emitus [![npm](https://img.shields.io/npm/v/emitus.svg)](https://www.npmjs.com/package/emitus) [![npm](https://img.shields.io/npm/dt/emitus.svg)](https://www.npmjs.com/package/emitus) [![Build Status](https://travis-ci.org/joseluisq/emitus.svg?branch=master)](https://travis-ci.org/joseluisq/emitus) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Small [Typescript](https://www.typescriptlang.org/) [Event Emitter](https://nodejs.org/api/events.html). :zap:

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
import { emitus, Emitus, EmitusListener } from 'emitus'

const emitter:Emitus = emitus()

const onEvent: EmitusListener = (type?: string, args?: any) => {
  console.log(type, args)
  // > "myevent", { data: 123456 }
}

emitter.on('myevent', onEvent)

emitter.emit('myevent', { data: 123456 })
```

## API

### on

Register a custom event listener.

```ts
emitter.on (type: string, func: EmitusListener): void
```

### off

Unregister a custom event listener.

```ts
emitter.off (type: string, func?: EmitusListener): void
```

### emit

Calls listener registered for the event named `eventName` passing the supplied arguments.

```ts
emitter.emit (eventName: string, args?: any): void
```

## Contributions
[Pull requests](https://github.com/joseluisq/emitus/pulls) and [issues](https://github.com/joseluisq/emitus/issues) are welcome.

## License
MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
