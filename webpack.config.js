const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  devServer: {
    open: true,
    port: 3030
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'// indica el template que tiene que usar
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['emotion']

          }
        }

      }
    ]
  }

}
