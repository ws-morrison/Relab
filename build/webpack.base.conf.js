const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpack = require('copy-webpack-plugin')
const HtmlWebpack = require('html-webpack-plugin')
const Jquery = require('jquery')
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../docs'),
    assets: '',
}

module.exports = {
    externals: {
        paths: PATHS
    },

    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: ''
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: `${PATHS.assets}fonts/[name].[ext]`,
                publicPath: '../'
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: { sourceMap: true }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: `${PATHS.src}/js/postcss.config.js`
                        }
                    }
                },
                {
                    loader: "sass-loader",
                    options: { sourceMap: true }
                }
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                }
            ]
        }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new HtmlWebpack({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new HtmlWebpack({
            hash: false,
            template: `${PATHS.src}/2.html`,
            filename: './2.html'
        }),
        new HtmlWebpack({
            hash: false,
            template: `${PATHS.src}/3.html`,
            filename: './3.html'
        }),
        new CopyWebpack([
            { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/static`, to: '' }
        ]),
        new Jquery({
            $: "jquery",
            jQuery: "jquery"
        }),
    ]
}