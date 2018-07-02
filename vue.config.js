const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob').sync;
const path = require('path');

module.exports = {
    configureWebpack: {
        plugins: [
            new SpriteLoaderPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerMode: 'static',
                reportFilename: '../report/report.html'
            })
        ]
    },
    chainWebpack: config => {
        //use vue compiler
        config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
    }
};