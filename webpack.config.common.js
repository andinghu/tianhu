var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '', '.svg', '.jpeg', '.jpg', '.png']
    },
    jsonLoader: {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
    },
    jsLoader: {
        test: /\.(js|jsx)$/,
        include: [
            path.join(__dirname, 'app')
        ],
        loaders: ['babel']
    },
    cssLoader: {
        test: /\.scss$/,
        include: [
            path.join(__dirname, 'app')
        ],
        loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path][name]-[local]',
            'postcss',
            'sass'
        ]
    },
    fileLoader: {
        test: /\.(jpg|jpeg|png)$/,
        loader: 'file-loader'
    },
    svgLoader: {
        test: /\.svg$/,
        loader: 'raw-loader'
    },
    postcss: [autoprefixer]
};