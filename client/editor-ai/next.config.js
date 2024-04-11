

// next.config.js

require('dotenv').config();
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://127.0.0.1:5000/document/:path*',
        },
      ]
    },
};