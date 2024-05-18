// @ts-expect-error plugin has not typos
import pluginVue from 'eslint-plugin-vue';
import type { Linter } from 'eslint';

export default function vue(overrides: Linter.FlatConfig[] = []) {
  return [
    ...pluginVue.configs['flat/recommended'],
    ...overrides,
  ];
}