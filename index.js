export default (obj = {}) => {
  const list = []
  const extend = Object.assign({on, off, emit}, obj)

  function on (name, callback) {
    list.push({name, callback})
  }

  function off (name, callback = null) {
    list.forEach((evnt, i) => {
      if (evnt.name === name && evnt.callback === callback) {
        list.splice(i, 1)
      }

      if (evnt.name === name && !callback) {
        list.splice(i, 1)
      }
    })
  }

  function emit (name, args = []) {
    list.forEach(evnt => {
      if (evnt.name === name) {
        evnt.callback.apply(this, args)
      }
    })
  }

  return extend
}
