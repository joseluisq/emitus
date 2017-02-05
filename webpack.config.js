const Webpack = require('webpack')

module.exports = {
  output: {
    library: 'Emitus',
    libraryTarget: 'umd'
  },

  devtool: false,

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      '__DEVTOOLS__': false
    })
  ]
}
