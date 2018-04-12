const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app/main.js',
  output: {
    path: path.join(__dirname + '/src/public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/,
      options: {

      }
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}
