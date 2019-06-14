const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'client'),
};

module.exports = require('./webpack.config')({
    mode: 'development',

    entry: ['babel-polyfill', 'react', 'react-dom', PATHS.app],

    devtool: 'eval-source-map',

    devServer: {
        https: false,
        host: 'localhost',
        port: 8090,
        clientLogLevel: 'info',
        quiet: false,
        hot: true,
        inline: true,
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: '/',
        proxy: {
            '**': {
                target: 'http://localhost:8080',
                secure: false,
            },
        },
        disableHostCheck: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'node_modules/html-webpack-template/index.ejs',
            title: 'boilerplate',
            appMountId: 'app',
            favicon: './client/assets/gultech.png',
            chunksSortMode: 'dependency',
            inject: false,
        }),
    ],

    performance: {
        hints: false,
    },
});
