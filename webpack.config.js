const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, './src/index.js')
    ],

    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: ['react-hot-loader/webpack']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',

            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/images/'),
                use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        port: 3000,
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: 'localhost'
    },
    devtool: 'source-map'
}

module.exports = webpackConfig