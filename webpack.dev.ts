import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const config = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: './example/main.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'example/index.html'), title: 'tetrisly' })],
});

export default config;
