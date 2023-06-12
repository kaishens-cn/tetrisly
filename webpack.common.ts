import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: '@kaishens.cn/tetrisly',
    umdNamedDefine: true,
  },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 提取到单独的CSS文件
          MiniCssExtractPlugin.loader,
          // 转换 CSS 到 CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true, //资源映射
            },
          },
          // 给 CSS 添加前缀以适应各浏览器
          'postcss-loader',
          // 编译 Sass 到 CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
};

export default config;
