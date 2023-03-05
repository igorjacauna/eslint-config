module.exports = {
  settings: {
    react: {
      version: '17.0',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    '@igorjacauna/eslint-config-typescript',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        'extensions': ['.ts', '.tsx', '.js', '.jsx']
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
}
