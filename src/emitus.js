/* global module */

module.exports = (obj = {}) => {
  const list = []
  const api = Object.assign({on, off, emit}, obj)

  function on (name, fn) {
    list.push({name, fn})
  }

  function off (name, fn = null) {
    list.forEach((e, i) => {
      /* istanbul ignore if */
      if (e.name === name && e.fn === fn) {
        list.splice(i, 1)
      }

      /* istanbul ignore if */
      if (e.name === name && !fn) {
        list.splice(i, 1)
      }
    })
  }

  function emit (name, args = []) {
    list.forEach(e => {
      /* istanbul ignore next */
      if (e && e.name === name && typeof e.fn === 'function') {
        e.fn.apply(this, args)
      }
    })
  }

  return api
}
