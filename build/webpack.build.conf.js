// --mode production

const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')

const buildConf = merge(baseConf, {
    mode: "production",
    plugins: []
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildConf)
})