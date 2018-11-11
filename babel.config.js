module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
      },
    ],
    ['@babel/env', {
      modules: false,
    }],
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
