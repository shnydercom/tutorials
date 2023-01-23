require('dotenv').config()
const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');
module.exports = function(app) {
    app.use(
      '/graphqlapiproxy',
      createProxyMiddleware({
        target: `${env.GRAPHQL_API_HOST}/graphql`,
        changeOrigin: true,
      })
    );
  };
  