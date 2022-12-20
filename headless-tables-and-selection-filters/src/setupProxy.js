const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/graphqlapiproxy',
      createProxyMiddleware({
        target: 'http://localhost:8080/graphql',
        changeOrigin: true,
      })
    );
  };
  