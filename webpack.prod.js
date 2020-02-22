const path = require("path");
const config = require("./webpack.config");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config,{
    mode: "production",
    devtool: 'source-map',
    output:{
        filename: "[name]-[contentHash]-bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    optimization:{
        minimizer:[
            new HtmlWebpackPlugin({
                template:"./src/template.html",
                minify:{
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"[name]-[contentHash].bundle.css"
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    }

})
