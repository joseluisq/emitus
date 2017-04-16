import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import fs from 'fs'

const env = process.env.NODE_ENV
const pkg = JSON.parse(fs.readFileSync('./package.json'))
const plugins = [ buble() ]
let suffix = ''

if (env === 'compressed') {
  suffix = '.min'
  plugins.push(uglify())
}

export default {
  entry: 'index.js',
  useStrict: false,
  sourceMap: true,
  plugins,
  targets: [
    { dest: `dist/${pkg.name}${suffix}.js`, format: 'cjs' },
    {
      dest: `dist/${pkg.name}.umd${suffix}.js`,
      format: 'umd',
      moduleName: pkg.name
    }
  ]
}
