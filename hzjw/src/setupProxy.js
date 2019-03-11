const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/hzjwztc/api', {
      target: 'http://120.26.199.4:8080',
      changeOrigin: true
    })
  )
}
