const path = require('path');
const withReactSvg = require('next-react-svg');

const nextConfig = {
  include: path.resolve(__dirname, 'public/assets'),
  webpack(config) {
    return config;
  },
};

module.exports = withReactSvg(nextConfig);
