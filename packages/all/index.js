module.exports = {
  overrides: [
    {
      files: ["*.vue"],
      extends: ['@igorjacauna/eslint-config-vue'],
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['@igorjacauna/eslint-config-react']
    }
  ]
}
