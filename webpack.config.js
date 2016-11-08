const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
  // Import the plugin:
const DashboardPlugin = require('webpack-dashboard/plugin');
// const bablePolyfill = require("babel-polyfill")


const ip = require('ip')

var isProduction = function () {
  return process.env.NODE_ENV === 'production'
}


var plugins = [
  new webpack.DefinePlugin({
    VERSION: pkg.version,
    DEBUG: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': isProduction() ? '"production"' : '"development"'
  }),

  new webpack.ProvidePlugin({
    // $: 'jquery',
    // jQuery: 'jquery',
    // 'window.jQuery': 'jquery'
  }),
  new webpack.optimize.CommonsChunkPlugin(
    /* chunkName= */
    'vendor', /* filename= */ '[hash:8].vendor.bundle.js'
  ),

  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, 'src/index.html'),
    favicon: path.join(__dirname, 'src/img/favicon.jpg'),
    minify: { //压缩HTML文件    
      removeComments: true, //移除HTML中的注释
      collapseWhitespace: false //删除空白符与换行符
    },
  }),

  // new OpenBrowserPlugin({ url: 'http://localhost:8080' })  
  new OpenBrowserPlugin({
    url: `http://${ip.address()}:8080`
  }),

  new DashboardPlugin()
]

var loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    presets: ['es2015', 'react']
  }
}, {
  test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
  // loaders: ["url?limit=1024&name=img2/[name].[ext]"],
  loaders: ['url?limit=1024&name=[path][hash:8].[name].[ext]'],
  exclude: /node_modules/
}, {
  test: /\.less$/,
  exclude: /node_modules/,
  loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less'
}, {
  test: /\.css$/,
  // exclude: /node_modules/,
  loader: 'style!css!postcss'
}, {
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: 'style!css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
}]

if (isProduction()) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })

    // , new ExtractTextPlugin('css/style.css')
  )

  loaders.push(
    // {
    //   test: /\.scss$/,
    //   loader: ExtractTextPlugin.extract('style', 'css!sass', 'postcss')
    // }
    // {
    //   test: /\.scss$/,
    //   exclude: /node_modules/,
    //   loader: 'style!css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
    // }
  )
} else {
  // loaders.push({
  //   test: /\.scss$/,
  //   exclude: /node_modules/,
  //   loader: 'style!css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
  // })
}

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'index': ['./index'],
    'vendor': ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: isProduction() ? '[chunkhash:8].[name].min.js' : '[name].js',
    chunkFilename: isProduction() ? 'js/[chunkhash:8].chunk.min.js' : '[chunkhash:8].chunk.js'
  },
  module: {
    loaders: loaders
  },
  postcss: [autoprefixer],
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    // root: path.join(__dirname, '/app/js-es6/'),
    modulesDirectories: ['node_modules']
  },
  plugins: plugins,
  devtool: "source-map",
  devServer: {
    contentBase: './dist',
    port: 8080,
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true
  },
  externals: {
    'Config': JSON.stringify(isProduction() ? {
      serverURL: 'http://localhost:8091'
    } : {
      serverURL: 'http://localhost:8091'
    })
  }
}