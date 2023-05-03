const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: { 
        main: path.resolve(__dirname, './src/index.js'), 
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        hot: false,
        liveReload: true,
        compress: true,
        port: 9000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/assets/images", to: "" }
            ],
        }), 
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        }),
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html',
        }),
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html',
        }),
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
            filename: 'rozklad.html',
        })
    ], 
} 