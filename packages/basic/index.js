module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  plugins: [
    'eslint-plugin-import-helpers',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['warn', { 'allow': ['tron'] }],
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        'alphabetize': { 'order': 'asc', 'ignoreCase': true }
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'max-depth': ['error', {'max': 3}],
    'max-len': ['error', { 'code': 100 }],
    'complexity': ['error', {'max': 4}],
    'max-lines': ['warn', {'max': 300, 'skipBlankLines': true, 'skipComments': true}],
    "prettier/prettier": [
      "error",
      {
        "bracketSpacing": true,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "trailingComma": "all",
        "arrowParens": "avoid"
      }
    ],
  },
}
