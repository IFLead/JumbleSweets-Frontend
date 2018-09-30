
module.exports = {
  lintOnSave: true,
  // chainWebpack: (config) => {
  //   config.module.rule('eslint').use('eslint-loader').options({
  //     fix: true,
  //   });
  // },
  devServer: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/media': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
};
