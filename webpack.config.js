const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
const { join } = require('path')

module.exports = {
    entry: {
        main: __dirname + '/src/index.ts'} ,
    output: {
        path: path.resolve(__dirname + 'dist'),
        filename: 'js/[name].[hash].bundle.js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [ {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                } ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/client/public/index.html',
            inject: 'body'
        })
    ],
    devServer: {
        liveReload: true,
        port: 3001,
        compress: true
    }
}