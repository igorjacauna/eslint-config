// @ts-expect-error plugin has not typos
import pluginVue from 'eslint-plugin-vue';

export default function vue(overrides: unknown[] = []) {
  return [
    ...pluginVue.configs['flat/recommended'],
    ...overrides,
  ];
}