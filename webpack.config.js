const Path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: Path.resolve(__dirname, 'src'),
  externals: [
    /bignumber.js/
  ],
  output: {
    filename: 'index.js',
    path: Path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]
}
