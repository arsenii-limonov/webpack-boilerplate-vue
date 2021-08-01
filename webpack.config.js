const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test: /\.vue$/,
            loader: "vue-loader",
          },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                   {
                     loader: "css-loader",
                   },
                   {
                     loader: "sass-loader",
                     options: {
                       implementation: require("sass")
                     }
                   }
                 ]
          }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  
  ],
};