import test from 'ava'
import emitus from './'

test('Test suite', t => {
  t.plan(10)

  const Octocat = emitus({
    name: 'Octocat',
    commit: (message, branch) => {
      t.is(message, 'message')
      t.is(branch, 'master')

      Octocat.emit('commit', [message, branch])
    }
  })

  t.is(Octocat.name, 'Octocat')
  t.truthy(Octocat.on)
  t.truthy(Octocat.off)
  t.truthy(Octocat.emit)

  Octocat.on('commit', (message, branch) => {
    t.is(message, 'message')
    t.is(branch, 'master')
  })

  t.falsy(Octocat.commit('message', 'master'))

  t.falsy(Octocat.off('commit'))
})
