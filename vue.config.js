const path = require('path');

module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.sideEffects = true;
    } else {

    }
  },
  chainWebpack: config => {
    // GraphQL Loader
    // config.module
    //   .rule('graphql')
    //   .test(/\.gql$/)
    //   .use('graphql-tag/loader')
    //   .loader('graphql-tag/loader')
    //   .end()

    // const svgRule = config.module.rule('js');
    // svgRule.include = [ // use `include` vs `exclude` to white-list vs black-list
    //   path.resolve(__dirname, "src"), // white-list your app source files
    //   require.resolve("bootstrap-vue"), // white-list bootstrap-vue
    // ];

  },
  // chainWebpack: (config) => {
  //   config.module.rule('eslint').use('eslint-loader').options({
  //     fix: true,
  //   });
  // },
  productionSourceMap: false,
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
