const e = require('express');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.jsx', // This is the start of the dependency graph that webpack will build from.
  output: {
    // This is where we want webpack to build our bundle.
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  // We need this for our webpack dev server
  devServer: {
    publicPath: 'http://localhost:8080/build/',
    proxy: {
      // Webpack dev server does not hit the backend. But if we want a request that use the backend, we need a proxy that says if there's a fetch on /api, redirect any request to localhost:3000.
      '/': 'http://localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        // Converts jsx to ES5
        test: /\.jsx?/i,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        // use: { //For windows users, instead of the presets here, put in a .babelrc file with the presets. 
        //   presets: ['@babel/preset-env', '@babel/preset-react'],
        // },
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          // Creates `style` nodes from JS strings (reads this loader last)
          'style-loader',
          // Translates CSS into CommonJS (reads this second)
          'css-loader',
        //   // Compiles Sass to CSS (reads this first)
        //   'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
            limit: 10000,
            name: "static/media/[name].[hash:8].[ext]",
        },
    },
    {
        test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
        loader: require.resolve("file-loader"),
        options: {
            name: "/static/media/[name].[hash:8].[ext]",
        },
    }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
