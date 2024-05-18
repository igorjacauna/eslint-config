import stylisticTs from '@stylistic/eslint-plugin-ts';
import tseslint from 'typescript-eslint';
import parserTs from '@typescript-eslint/parser';

export default function typescript(overrides: unknown[] = []) {
  return [
    {
      plugins: {
        '@stylistic/ts': stylisticTs,
      },
      languageOptions: {
        parser: parserTs,
      },
    },
    ...tseslint.configs.recommended,
    ...overrides,
  ];
}