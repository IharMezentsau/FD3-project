var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.config');
var optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function (env) {
    const NODE_ENV = env.NODE_ENV ? env.NODE_ENV : 'development';
    return {
        output: {
            publicPath:'./',
            filename: '[name].bundle.[hash].min.js'
        },
        plugins: [
            new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            })
        ]
    };
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);