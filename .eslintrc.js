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
    'one-var': ['error', { var: 'always', let: 'always' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'prefer-const': ['error', {
      'destructuring': 'all',
      'ignoreReadBeforeAssign': true,
    }],
    'indent': ['error', 2, { 'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3 } }],
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
    'vue/script-indent':
      ['error', 2, {
        baseIndent: 0,
        switchCase: 1,
      }],
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
