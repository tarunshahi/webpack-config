const path = require("path");
const config = require("./webpack.config");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config,{
    mode: "development",
    output:{
        filename: "[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
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
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"[name]-[contentHash].css"
        }),
    ]
})
