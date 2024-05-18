import stylisticTs from '@stylistic/eslint-plugin-ts';
import tseslint from 'typescript-eslint';
import parserTs from '@typescript-eslint/parser';
import type { Linter } from 'eslint';

export default function typescript(overrides: Linter.FlatConfig[] = []): Linter.FlatConfig[] {
  return [
    {
      plugins: {
        '@stylistic/ts': stylisticTs,
      },
      languageOptions: {
        parser: parserTs,
      },
    },
    ...tseslint.configs.recommended as Linter.FlatConfig[],
    ...overrides,
  ];
}