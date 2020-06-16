const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: ['webpack-hot-middleware/client', './src/index.js'],
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
};