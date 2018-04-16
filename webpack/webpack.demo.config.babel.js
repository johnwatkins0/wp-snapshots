/* eslint import/no-extraneous-dependencies: 0 */
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

import packageJson from '../package.json';
import rules from './rules';

const PROD = process.argv.includes('-p');
const MIN = PROD ? '.min' : '';

const plugins = [
  new ExtractTextPlugin(`[name]${MIN}.css`),
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, '../demo/index.html'),
    template: path.resolve(__dirname, '../demo/src/index.html'),
  }),
];

const main = {
  mode: PROD ? 'production' : 'development',
  entry: {
    [packageJson.name]: [
      path.resolve(__dirname, '../demo/src/'),
      path.resolve(__dirname, '../src/css/style.css'),
    ],
  },
  output: {
    filename: `[name]${MIN}.js`,
    path: path.resolve(__dirname, '../demo'),
  },
  plugins,
  module: {
    rules,
  },
  devtool: !PROD && 'sourcemap',
  devServer: {
    open: true,
    openPage: 'wp-snapshots/snapshots/snapshots-demo/',
    publicPath: '/wp-snapshots/snapshots/snapshots-demo/',
  },
};

export default main;
