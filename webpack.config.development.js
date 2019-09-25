module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 8080,
    publicPath: 'http://localhost:8080/',
    hot: true,
  },
};
