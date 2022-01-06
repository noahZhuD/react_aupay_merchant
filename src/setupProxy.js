const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/merchant', {
      target: 'http://aucall.one',
      changeOrigin: true,
      pathRewrite: {'^/merchant': ''}
    })
  )
}