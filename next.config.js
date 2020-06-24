const path = require('path');

const withOffline = require('next-offline');
const withReactSvg = require('next-react-svg');

const nextConfig = {
  include: path.resolve(__dirname, 'public/assets'),
  webpack(config) {
    return config;
  },
};

module.exports = withOffline(withReactSvg(nextConfig));
