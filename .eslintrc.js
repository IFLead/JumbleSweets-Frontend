module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': 'off',
    'vue/html-closing-bracket-newline': 'warning',
    'vue/html-closing-bracket-spacing': 'warning',
    'vue/no-use-v-if-with-v-for': 'warning',
    'vue/no-v-html': 'warning',
    'vue/prop-name-casing': 'warning',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [5, {
      multiline: {
        max: 5,
        allowFirstLine: true,
      },
    }],
    'vue/script-indent': 'off',
    //     ['error', 2, {
    //     'baseIndent': 1,
    //     'switchCase': 1,
    // }]
    'no-mixed-operators': [
      'error',
      {

        allowSamePrecedence: true,
      },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
