import pkg from './package.json'

export default {
  input: 'dist/index.js',
  output: {
    name: pkg.name,
    file: `dist/${pkg.name}.umd.js`,
    format: 'umd',
    exports: 'named',
    sourcemap: true
  },
  onwarn
}

function onwarn (message) {
  const suppressed = [ 'UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED' ]

  if (!suppressed.find((code) => message.code === code)) {
    return console.warn(message.message)
  }
}
