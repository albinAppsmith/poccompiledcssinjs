const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.(js|ts|tsx)$/,
            exclude: /node_modules/,
            use: [
              { loader: 'babel-loader' },
              {
                loader: '@compiled/webpack-loader',
              },
            ],
          }
        ],
      },
    },
  },
};