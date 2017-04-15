module.exports = (api = {}) => {
  const events = {}

  return Object.assign(
    {
      on (type, fn) {
        (events[type] || (events[type] = [])).push(fn)
      },
      off (type, fn = null) {
        if (events[type]) {
          events[type].splice(events[type].indexOf(fn), 1)
        }
      },
      emit (type, args = []) {
        (events[type] || []).map(fn => {
          if (fn && typeof fn === 'function') fn.apply(this, args)
        })
      }
    },
    api
  )
}
