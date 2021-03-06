/* eslint import/no-extraneous-dependencies: 0 */
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import rules from './rules';

import packageJson from '../package.json';

const PROD = process.argv.includes('-p');
const WATCHING = process.argv.includes('-w');

const min = PROD ? '.min' : '';
const entry = {
  [packageJson.name]: [
    path.resolve(__dirname, '../src/js/'),
    path.resolve(__dirname, '../src/css/style.css'),
  ],
};
const filename = `[name]${min}.js`;
const plugins = [new ExtractTextPlugin(`[name]${min}.css`)];

if (!WATCHING) {
  plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

const main = {
  mode: PROD ? 'production' : 'development',
  entry,
  output: {
    filename,
    path: path.resolve(__dirname, '../dist'),
  },
  plugins,
  module: {
    rules,
  },
  devtool: !PROD && 'sourcemap',
};

export default main;
