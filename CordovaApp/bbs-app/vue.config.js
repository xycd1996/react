const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  publicPath: '.',
  outputDir: '../www/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@api', resolve('src/api'))
      .set('@views', resolve('src/views'))
    return config
  }
}