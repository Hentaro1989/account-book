const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ template: './src/app.html' }),
        new CopyWebpackPlugin([
            { from: './src/service-worker.js', to: './' },
            { from: './src/manifest.json',     to: './' },
            { from: './src/images',            to: './images' },
        ])
    ],
    module: {
        rules: [
            { test: /\.css/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devServer: {
        contentBase: './dist'
    }
};