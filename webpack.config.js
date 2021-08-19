const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

    config.devtool = argv.mode === 'development' ? 'source-map' : false;
    
    return config;

}

let config = {

    output : {
        path : path.resolve(__dirname, 'dist')
    },

    module : {
        rules : [{
            test : /\.jsx?$/,
            exclude : /node_modules/,
            use : {
                loader : 'babel-loader'
            }
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
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, 'src/index.html')
        })
    ]
}