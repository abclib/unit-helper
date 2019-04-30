module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true,
    amd: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
