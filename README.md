# Emitus [![Build Status](https://travis-ci.org/joseluisq/emitus.svg?branch=master)](https://travis-ci.org/joseluisq/emitus) [![Coverage Status](https://coveralls.io/repos/github/joseluisq/emitus/badge.svg?branch=master)](https://coveralls.io/github/joseluisq/emitus?branch=master) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Small [Typescript](https://www.typescriptlang.org/) [Event Emitter](https://nodejs.org/api/events.html).

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
<script src="https://unpkg.com/emitus/dist/emitus.umd.js"></script>
```

You can use the library via `window.emitus`.

## Usage

```ts
import { emitus, Emitus, EmitusListener } from 'emitus'

const e:Emitus = emitus()

const onEvent: EmitusListener = (type?: string, args?: any) => {
  console.log(type, args)
  // > "myevent", { data: 123456 }
}

e.on('myevent', onEvent)

e.emit('myevent', { data: 123456 })
```

## API

### on

Register a custom event handler.

```ts
e.on (type: string, func: EmitusHandler)
```

### off

Unregister a custom event handler.

```ts
e.off (type: string, func?: EmitusHandler)
```

### emit
Emit an **event** (`string`) with **options** (`array`).

## Contributions
[Pull requests](https://github.com/joseluisq/emitus/pulls) and [issues](https://github.com/joseluisq/emitus/issues) are welcome.

## License
MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
