const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  addWebpackAlias({
    '@': resolve('src'),
    '@assets': resolve('src/assets'),
    '@components': resolve('src/components'),
    '@views': resolve('src/views'),
    '@api': resolve('src/api')
  })
)