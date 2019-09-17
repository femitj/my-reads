const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    historyApiFallback: true,
    port: 8080,
    publicPath: 'http://localhost:8080/dist/',
    hot: true,
  },
};
