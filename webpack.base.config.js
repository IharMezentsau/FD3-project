var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
let isProd = process.env.NODE_ENV === 'production';
const ExtractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: ["@babel/polyfill", './App.js'],
    output: {
        path: __dirname + '/public/',
        filename: '[name].bundle.[hash].js'
    },
    devtool:'source-map',
    devServer: {
        contentBase: './src/',
        watchContentBase: true,
        inline: true,
        progress: true,
        compress: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|gif|jpe?g)$/i,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: 'src',
                            name: '[path][name].[ext]'
                        }
                    },
                    'img-loader',
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].bundle.[hash].css"),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: "body"
        }),
        isProd ?
            new ImageminPlugin({
                test: /\.(png|gif|jpe?g|svg)$/i
            })
            : false,
    ].filter(Boolean)
}
