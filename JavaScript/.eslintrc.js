/* eslint-disable no-unused-vars */
// Rules ids
const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': off,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['helpers', './helpers'],
        ],
        extensions: ['.js'],
      },
    },
  },
};
