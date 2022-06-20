module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@igorjacauna/eslint-config-typescript',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  }
}
