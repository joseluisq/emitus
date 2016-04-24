var test = require('tape')
var Emitus = require('./')

test('Test Suite', function (t) {
  t.plan(7)

  const Octocat = Emitus({
    name: 'Octocat',
    commit: function (message, branch) {
      t.equal(branch, 'master', 'OK when params are equal')

      // Emit event
      Octocat.emit('commit', [message, branch])
    }
  })

  // Event handler
  Octocat.on('commit', function (message, branch) {
    t.equal(message, 'message', 'OK when params are equal')
  })

  // API function
  Octocat.commit('message', 'master')

  t.ok(Octocat.name, 'OK when property exists')
  t.ok(Octocat.commit, 'OK when `commit()` function exists')
  t.ok(Octocat.on, 'OK when `on()` function exists')
  t.ok(Octocat.off, 'OK when `off()` function exists')
  t.ok(Octocat.emit, 'OK when `emit()` function exists')
})
