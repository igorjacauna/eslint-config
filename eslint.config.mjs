import igorjacauna from './dist/index.mjs';

export default [
  {
    ignores: ['**/dist/**/*'],
  },
  ...igorjacauna(),
];