
const merge = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート
const HtmlWebpackPlugin = require('html-webpack-plugin')

// common設定とマージする
module.exports = merge(common, {
  mode: 'production', // 本番モード
  plugins: [
    new HtmlWebpackPlugin({
      filename: "sober-curious.php",
      template: "./src/index.html"
    })
  ],
  output: {
    publicPath: 'https://yhirochick.xyz/wp-content/themes/ryu/static/js/',
    filename: '[name].[contentHash].js'
  },
})