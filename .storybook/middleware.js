const { createProxyMiddleware } = require('http-proxy-middleware')
const packageJson = require('../package.json')

module.exports = function expressMiddleware(app) {
  const proxyConfig = packageJson.proxy || {}

  for (let domain in proxyConfig) {
    if (typeof proxyConfig[domain] === 'string') {
      console.log(domain)
      app.use(domain, createProxyMiddleware({
        target: proxyConfig[domain],
        changeOrigin: true
      }))
    } else {
      app.use(domain, createProxyMiddleware(proxyConfig[domain]))
    }
  }
}