const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        main:"./src/index.js",
        vendor:"./src/vendor.js"
    },
    module:{
        rules :[
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test:/\.(png|gpg|svg|gif|jpeg)$/,
                loader:"file-loader",
                options:{
                    esModule: false,
                    name:'[name]-[contenthash].[ext]',
                    outputPath:"assets/imgs"
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./src/template.html"
    })]
}
