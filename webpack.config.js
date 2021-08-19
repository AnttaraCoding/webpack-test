const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {

    config.devtool = argv.mode === 'development' ? 'source-map' : false;
    
    return config;

}

let config = {

    output : {
        path : path.resolve(__dirname, 'dist'),
        assetModuleFilename : "img/[hash][ext][query]"
    },
    target : 'web',
    module : {
        rules : [{
            test : /\.jsx?$/,
            exclude : /node_modules/,
            use : {
                loader : 'babel-loader'
            }
        },{
            test : /\.s?css$/,
            use : [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ]
        },{
            test : /\.(png|jpg?g|gif|svg)$/,
            type : "asset/resource"
        }]
    },

    resolve : {
        extensions : ["",".js",".jsx"]
    },

    devServer : {
        port : 3000,
        open : true,
        hot  : true
    },

    plugins : [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, 'src/index.html')
        })
    ]
}