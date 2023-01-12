const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        publicPath: '/',
    },
    entry: {
        bundle: './src/index.tsx',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]_[local]--[hash:base64:5]',
                            },
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: '@svgr/webpack',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },
};
