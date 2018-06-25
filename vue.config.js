const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob').sync;
const path = require('path');

module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'svg-sprite-loader',
                    options: {
                        extract: true,
                        spriteFilename: 'img/sprites.svg'
                    }
                }
            ]
        },
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
        const images = glob('./images/svg/*.svg');
        const svgEntry = config.entry('svg');
        images.forEach(function(image) {
           svgEntry.add(image);
        });

        svgEntry.end();

        //delete existing svg rule
        config.module.rules.delete('svg');


        //use vue compiler
        config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
    }
};