const Benchmark = require('benchmark')
const { emitus } = require('./')
const mitt = require('mitt')
const crypto = require('crypto')

const suite = new Benchmark.Suite()
const e1 = emitus()
const e2 = mitt()

suite
  .add('emitus: on', {
    defer: true,
    fn: (defer) => {
      const key = crypto.randomBytes(64).toString('base64')
      e1.on(key, () => defer.resolve())
      setTimeout(() => e1.emit(key), 10)
    }
  })
  .add('emitus: off', {
    defer: true,
    fn: (defer) => {
      const key = crypto.randomBytes(64).toString('base64')
      const fn = () => defer.resolve()
      e1.on(key, fn)
      setTimeout(() => {
        e1.off(key, fn)
        defer.resolve()
      }, 10)
    }
  })

  .add('mitt: on', {
    defer: true,
    fn: (defer) => {
      const key = crypto.randomBytes(64).toString('base64')
      e2.on(key, () => defer.resolve())
      setTimeout(() => e2.emit(key), 10)
    }
  })

  .add('mitt: off', {
    defer: true,
    fn: (defer) => {
      const key = crypto.randomBytes(64).toString('base64')
      const fn = () => { }
      e2.on(key, fn)
      setTimeout(() => {
        e2.off(key, fn)
        defer.resolve()
      }, 10)
    }
  })

  .on('cycle', (event) =>
    console.log(String(event.target)))
  .on('complete', () =>
    console.log('Fastest is ' + suite.filter('fastest').map('name')))
  .run({ async: true })
