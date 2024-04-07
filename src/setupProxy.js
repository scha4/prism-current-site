const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:7071/api', // 함수 앱의 호스트 및 포트
      changeOrigin: true,
    })
  );
};