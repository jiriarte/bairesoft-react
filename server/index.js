const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Proxy middleware configuration
const anthropicProxy = createProxyMiddleware({
  target: 'https://api.anthropic.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/claude': '/v1/messages'
  },
  onProxyReq: (proxyReq, req) => {
    proxyReq.setHeader('x-api-key', process.env.ANTHROPIC_API_KEY);
    proxyReq.setHeader('anthropic-version', '2023-06-01');
    if (req.body) {
      const bodyData = JSON.stringify(req.body);
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      proxyReq.write(bodyData);
    }
  },
});

app.use('/api/claude', anthropicProxy);

app.listen(port, () => {
  console.log(`Servidor proxy corriendo en http://localhost:${port}`);
});
