const path = require('path');

module.exports = {
  webpack: function(config, env) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.alias,
        // This is what makes the paths work
        'src': path.resolve(__dirname, 'src')
      },
    }
    return config
  }
}
