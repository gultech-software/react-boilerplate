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
            template: 'node_modules/html-webpack-template/index.ejs',
            title: 'boilerplate',
            appMountId: 'app',
            favicon: './client/assets/gultech.png',
            chunksSortMode: 'dependency',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
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
