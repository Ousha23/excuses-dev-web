const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/excuses',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Le serveur backend à cibler
      changeOrigin: true,
    })
  );
};