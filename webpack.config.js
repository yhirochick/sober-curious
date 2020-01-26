const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.js$/,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ['bue-style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  // エントリポイントのファイル
  mode: "development",
  entry: './src/index.js',
  output: {
    // 出力先のディレクトリ
    path: path.resolve(__dirname, './dist'),
    // 出力ファイル名
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    open: true
  }
}
