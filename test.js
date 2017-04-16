import test from 'tape'
import emitus from './'

test('Test suite', t => {
  t.plan(8)

  const Octocat = emitus({
    name: 'Octocat',
    commit: (message, branch) => {
      t.equal(message, 'message')
      t.equal(branch, 'master')

      // Emit event
      Octocat.emit('commit', [ message, branch ])
    }
  })

  t.equal(Octocat.name, 'Octocat')
  t.ok(Octocat.on)
  t.ok(Octocat.off)
  t.ok(Octocat.emit)

  Octocat.on('commit', (message, branch) => {
    t.equal(message, 'message')
    t.equal(branch, 'master')
  })

  // Call API function
  Octocat.commit('message', 'master')

  Octocat.off('commit')
})
