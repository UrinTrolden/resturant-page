const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: '/dist',
  },
  watchOptions: {
    poll: true,
    ignored: '/node_modules/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Epic Gamer Food Palace',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: argv.mode === 'production' ? '/my-static-website' : '/',
    clean: true,
    hashFunction: "xxhash64"
  },
  module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     ],
   },
};