const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'client'),
    dist: path.join(__dirname, 'dist'),
};

module.exports = options => ({
    mode: options.mode,
    target: 'web',
    entry: options.entry,
    devServer: options.devServer,
    devtool: options.devtool,

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                rules: [
                    {
                        test: /\.less$/,
                        use: [
                            {
                                loader: 'style-loader',
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                        ],
                        exclude: '/node-modules/',
                    },
                ],
            },
            {
                test: /\.(otf|png|gif|woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.(jpg|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css'],
        modules: ['node_modules', PATHS.app, path.join(__dirname, '.')],
    },
    output: {
        path: PATHS.dist,
        publicPath: '/',
        filename: 'boilerplate.js',
        chunkFilename: 'boilerplate.chunk.js',
    },
    plugins: options.plugins,

    optimization: {
        namedModules: true,
        splitChunks: {
            name: 'vendor',
            minChunks: 2,
        },
    },
});
