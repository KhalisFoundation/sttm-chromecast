const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: 'app.[hash].css',
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
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },
      {
        test: /\.jpg$/,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]',
        },
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]',
        },
      },
      {
        test: /\.mp4$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/videos/[name][ext]',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js',
  },
  plugins,
};
