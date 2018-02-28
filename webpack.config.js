const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    }
  };