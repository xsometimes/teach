const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        globalVars: {},
        // modifyVars: { '@primary-color': '#1DA57A' },
        javascriptEnabled: true,
        // patterns: `@import "~@/assets/styles/variables.less";`
      }
    }
  ]
};
