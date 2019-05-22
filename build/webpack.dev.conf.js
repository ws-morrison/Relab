// --mode development
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')

const devConf = merge(baseConf, {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8081,
        contentBase: baseConf.externals.paths.dist,
        overlay: {
            warnings: true,
            errors: true
        },
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devConf)
})