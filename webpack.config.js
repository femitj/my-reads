/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpackDev = require('./webpack.config.development');

module.exports = () => {
  const env = process.env.NODE_ENV;
  let envConfig;
  !env
    ? (envConfig = webpackDev)
    : (envConfig = require(`./webpack.config.${env}`));
  return webpackMerge({ mode: env }, commonConfig, envConfig);
};
