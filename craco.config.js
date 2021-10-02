const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@src': path.join(__dirname, 'src'),
    },
  },
  devServer: {
    before: require('./mock/index')
  }
}