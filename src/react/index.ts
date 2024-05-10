// @ts-expect-error has not typos
import pluginReact from 'eslint-plugin-react';

export default function react() {
  return [
    {
      files: ['**/*.{jsx,tsx}'],
      ...pluginReact.configs.recommended,
      rules: {
        ...pluginReact.configs.rules,
      },
    },
  ];
}