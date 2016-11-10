const Emitus = require('./')

const Octocat = Emitus({
  name: 'Octocat',
  commit: (message, branch) => {
    test('Trigger API function', () => {
      expect(message).toBe('message')
      expect(branch).toBe('master')
    })

    // Emit event
    Octocat.emit('commit', [message, branch])
  }
})

test('API extended functions', () => {
  expect(Octocat.name).toBe('Octocat')
  expect(Octocat.on).toBeDefined()
  expect(Octocat.off).toBeDefined()
  expect(Octocat.emit).toBeDefined()
})

test('Trigger event with expected arguments', () => {
  Octocat.on('commit', (message, branch) => {
    expect(message).toBe('message')
    expect(branch).toBe('master')
  })
})

// Call API function
Octocat.commit('message', 'master')
