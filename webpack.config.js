const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    //Setup Entry Path
    entry: SRC_DIR + '/app/index.js',

    //Setup Mode 
    mode: 'development',

    //Setup Output
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },

    //Setup Modules
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            },

            {
                test: /\.css?/,
                loader: 'style-loader!css-loader',
            },

            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader',
                //loader: 'url-loader?limit=100000' }]
            }
        ]
    }
};