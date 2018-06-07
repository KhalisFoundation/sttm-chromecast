const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'),
  }),
  new ExtractTextPlugin({
    filename: 'app.[hash].css',
    disable: process.env.NODE_ENV === 'development',
    allChunks: true,
  }),
];

module.exports = {
  mode: 'production',
  entry: [
    path.resolve(__dirname, 'src', 'js', 'index.js'),
    path.resolve(__dirname, 'src', 'scss', 'index.scss'),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.png/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js',
  },
  plugins,
};
