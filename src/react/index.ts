// @ts-expect-error has not typos
import pluginReact from 'eslint-plugin-react';
import type { Linter } from 'eslint';

export default function react(overrides: Linter.FlatConfig[] = []) {
  return [
    {
      files: ['**/*.{jsx,tsx}'],
      ...pluginReact.configs.recommended,
      rules: {
        ...pluginReact.configs.rules,
      },
    },
    ...overrides,
  ];
}