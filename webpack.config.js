const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const common = {
  // Entry accepts a path or an object of entries
  // The build chapther contains an example of the latter
  entry: PATHS.app,
  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extension as it will fail to match without!!
  resolve: {
    extensions:['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: { 
    loaders: [
    {
      // Test expects a RegExp! Note the slashes!
      test: /\.css$/,
      loaders: ['style', 'css?modules', 'sass'],
      // Include accepts either a path or an array of paths.
      include: [PATHS.app, __dirname,'./node_modules/react-flexbox-grid'],
    },
    // Set up jsx. This accepts js too thanks to RegExp
    {
      test: /\.jsx?$/,
      // enable caching for improved performance during development
      // It uses default OS directory by default. If you need somehting
      // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
      loaders: ['babel?cacheDirectory'],
      include: PATHS.app,
    }
   ]
  }
};

// Default confiuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTMl5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      
      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}

