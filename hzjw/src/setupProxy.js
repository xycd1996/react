const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/hzjwztc/api', {
      target: 'http://120.26.199.4:8080',
      // target: 'http://192.168.2.104:8083',
      changeOrigin: true
    })
  )
}
