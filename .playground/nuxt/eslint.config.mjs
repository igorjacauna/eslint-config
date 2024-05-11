import withNuxt from './.nuxt/eslint.config.mjs';
import igorjacauna from '../../dist/basic/index.mjs';
import vue from '../../dist/vue/index.mjs';

export default withNuxt([
  ...igorjacauna([
    ...vue(),
  ]),
  {
    rules: {
      'no-undef': 'off',
    },
  },
]);
