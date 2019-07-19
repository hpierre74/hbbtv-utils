const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const babelConfig = require('./babel.config');

const buildAnalyzePlugin = process.env.BUILD_ANALYZE ? [new BundleAnalyzerPlugin()] : [];

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'Hbbtv-Utils',
    // Universal Module Definition
    libraryTarget: 'umd',
    filename: 'hbbtv.bundle.js',
    path: path.resolve(__dirname, 'lib'),
    // Universal Module Definition for named export definition
    umdNamedDefine: true,
    /**
     * By default webpack use window as global object which is not defined on Node env.
     * 'this' is defined on both Node and browser.
     */
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
      },
    ],
  },
  plugins: [...buildAnalyzePlugin],
  mode: 'production',
};
