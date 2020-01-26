const merge = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート
const HtmlWebpackPlugin = require('html-webpack-plugin')

// common設定とマージする
module.exports = merge(common, {
  mode: 'development', // 開発モード
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  output: {
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'inline-source-map', // 開発用ソースマップ
  devServer: {
    contentBase: 'dist',
    open: true
  }
})