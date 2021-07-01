const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = {
  mode: 'development',
  devServer: {
    port: 8100,
    stats: 'minimal',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
};

module.exports = merge(config, common);
