module.exports = {
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  extends: [
    'plugin:react/recommended',
    '@igorjacauna/eslint-config-typescript',
  ],
  rules: {
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".ts", ".tsx", ".js", ".jsx"]
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  }
}
