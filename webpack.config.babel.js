import path from 'path'
import webpack from 'webpack'
import WebpackNotifierPlugin from 'webpack-notifier'

let config = {
  context: path.join(__dirname, 'src'),
  debug: true,
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build/scripts'),
    publicPath: 'scripts/',
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'public',
    historyApiFallback: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: [
          'style', 
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 
          // 'style-loader', 
          // 'css-loader',
          // 'postcss-loader',
          'postcss'
        ]
      },
      // {
      //   test:   /\.css$/,
      //   exclude: /node_modules/,
      //   loader: 'style-loader!css-loader!postcss-loader'
      // },
      {
        test: /\.css$/,
        exclude: /src/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000'
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      // add your "plugins" here
      // ...
      // and if you want to compress,
      // just use css-loader option that already use cssnano under the hood
      require('postcss-browser-reporter')(),
      require('postcss-reporter')(),
    ]
  }

}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
  config.devServer = {}
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}

export default config
