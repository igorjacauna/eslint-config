module.exports = {
  extends: [
    '@igorjacauna/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: [
    {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['tsconfig.eslint.json'],
      },
      parser: '@typescript-eslint/parser',
      excludedFiles: ['**/*.md/*.*'],
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
    }
  ]
}
