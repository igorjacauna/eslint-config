import stylisticJs from '@stylistic/eslint-plugin-js';
import eslint from '@eslint/js';
import globals from 'globals';


export default function basic(overrides: unknown[] = []) {
  return [
    {
      plugins: {
        '@stylistic/js': stylisticJs,
      },
    },
    {
      ...eslint.configs.recommended,
    },
    {
      languageOptions: {
        globals: {
          ...globals.es2021,
          ...globals.browser,
          ...globals.node,
        },
      },
    },
    {
      // Eslint rules
      rules: {
        'no-console': ['warn', { 'allow': ['tron'] }],
        'class-methods-use-this': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'max-depth': ['error', {'max': 3}],
        'complexity': ['error', {'max': 4}],
        'max-lines': ['warn', {'max': 300, 'skipBlankLines': true, 'skipComments': true}],
      },
    },
    {
      // Stylistic rules
      rules: {
        '@stylistic/js/spaced-comment': ['error', 'always', { 'markers': ['/'] }],
        '@stylistic/js/max-len': ['error', { 'code': 100 }],
        '@stylistic/js/semi': ['error', 'always'],
        '@stylistic/js/quotes': ['error', 'single'],
        '@stylistic/js/indent': ['error', 2],
        '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/js/no-trailing-spaces': 'error',
      },
    },
    ...overrides,
  ];
}
