const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: ['webpack-hot-middleware/client', './client/main.js']
  },
  output: {
    globalObject: 'self',
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/',
    filename: 'app.js'
  },
  devServer: {
    historyApiFallback: false
  },
  resolve: {
    extensions: ['.js', '.vue', '.svg'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'client'),
      'layouts': path.resolve(__dirname, 'client/layouts/'),
      'components': path.resolve(__dirname, 'client/components/'),
      'mixins': path.resolve(__dirname, 'client/mixins/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [ 'transform-runtime', 'transform-object-rest-spread' ]
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                  }
                },
                css: 'vue-style-loader!css-loader!stylus-loader'
              }
            }
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-plain-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './client/index.html', inject: true}),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
}