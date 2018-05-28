const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const webpack = require('webpack')
const config
config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlPlugin()
    ]
}
// 如果是开发环境
if (isDev) {
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            // 如果编译有错误，显示在浏览器上
            errors: true,
        }
    }
}
module.exports = config