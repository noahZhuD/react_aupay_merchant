const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/merchant', {
      // target: 'http://aucall.one',
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: true,
      pathRewrite: {'^/merchant': ''}
    })
  )
}