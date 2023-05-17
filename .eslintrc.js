module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  ignorePatterns: [
    '.eslintrc.js',
    'dist'
  ],
  rules: {
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off'
  }
}
