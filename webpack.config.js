let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve('build'),
        filename:'bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
            },
            {
                test:/\.css$/,
                loader:['style-loader','common-loader'],
            },
            {
                test:/\.(eot|svg|woff|woff2|ttf|jpg|jepg|png|gif)$/,
                loader:'url-loader',
            },
            {
                test:/\.less$/,
                loaders:['style-loader','common-loader','less-loader'],
            },
        ]
    },
    devtool:'source-map',
    plugins:[
        new htmlWebpackPlugin({
            template:'./index.html',
        })
    ]
};
