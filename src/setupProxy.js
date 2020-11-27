const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth"],
    createProxyMiddleware({
      target: "https://pacific-castle-26534.herokuapp.com/",
      changeOrigin: true
    })
  );
};

