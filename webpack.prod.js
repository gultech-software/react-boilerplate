const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'client'),
    dist: path.join(__dirname, 'dist'),
};

module.exports = require('./webpack.config')({
    mode: 'production',

    entry: ['babel-polyfill', 'react', 'react-dom', PATHS.app],

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            title: 'Boilerplate',
            chunksSortMode: 'auto',
        }),
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: true,
        }),
        new DuplicatePackageCheckerPlugin({
            verbose: true,
            emitError: false,
            showHelp: true,
            strict: true,
        }),
    ],

    performance: {
        assetFilter: assetFilename =>
            !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },
});
