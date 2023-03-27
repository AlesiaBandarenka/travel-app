const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(gif|png|jpe?g|svg|jpg)$/i)
      .use('file-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75,
        },
      })
      .end();
  },
});
