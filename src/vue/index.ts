// @ts-expect-error plugin has not typos
import pluginVue from 'eslint-plugin-vue';

export default function vue() {
  return [
    ...pluginVue.configs['flat/recommended'],
  ];
}