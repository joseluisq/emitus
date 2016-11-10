# Emitus [![Build Status](https://travis-ci.org/joseluisq/emitus.svg?branch=master)](https://travis-ci.org/joseluisq/emitus) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Small [ES6](http://babeljs.io/docs/learn-es2015/) [Event Emitter](https://nodejs.org/api/events.html) to extend plain objects.

## Install

```sh
$ npm install emitus --save-dev
```

```sh
$ bower install emitus --save
```

## Usage

If one param is provided (`object`), **Emitus** extends this plain object using [`Object.assign(EmitusObject, APIObject)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

```js
const Emitus = require('emitus')

// API
const Octocat = Emitus({
  name: 'Octocat',
  commit: (message, branch) => {
    console.log(`"${Octocat.name}" is commiting on branch "${branch}"...`)

    // Emit event
    Octocat.emit('commit', [message, branch])
  }
})

// Event handler
Octocat.on('commit', (message, branch) => {
  console.log(`Commit "${message}" is on branch "${branch}"!`)
})

// API function
Octocat.commit('First change', 'master')

// "Octocat" is commiting on branch "master"...
// Commit "First change" is on branch "master"!
```

## API
### Emitus(object)
`object` param is the plain object `{}` to extend. `object` is optional.

### Methods
Three main methods are provided:

#### on(event, callback)
Register an **event** (`string`) handler with a **callback** (`function`).

#### off(event, callback)
Unregister an **event** (`string`) handler and **callback** (`function`). **callback** is optional.

#### emit(event, options)
Emit an **event** (`string`) with **options** (`array`).

## Contributions
[Pull requests](https://github.com/joseluisq/emitus/pulls) and [issues](https://github.com/joseluisq/emitus/issues) are welcome.

## License
MIT license

© 2016 [José Luis Quintana](http://git.io/joseluisq)
