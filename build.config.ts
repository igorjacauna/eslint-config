import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  externals: [
    '@stylistic/eslint-plugin-ts',
    '@typescript-eslint/utils',
    '@typescript-eslint/utils/ast-utils',
    '@stylistic/eslint-plugin-js',
    'eslint-visitor-keys',
    'espree',
    'escape-string-regexp',
    'acorn',
    'acorn-jsx',
    '@typescript-eslint/types',
    'eslint',
    '@typescript-eslint/scope-manager',
    '@eslint-community/eslint-utils',
    '@typescript-eslint/visitor-keys',
    '@eslint/eslintrc',
    'find-up',
    '@humanwhocodes/retry',
    'debug',
    'file-entry-cache',
    'json-stable-stringify-without-jsonify',
    'is-glob',
    'minimatch',
    '@nodelib/fs.walk',
    'glob-parent',
    'is-path-inside',
    '@humanwhocodes/config-array',
    'import-fresh',
    'strip-json-comments',
    'ignore',
    'ajv',
    'globals',
    'fast-deep-equal',
    'eslint-scope',
    'lodash.merge',
    '@eslint/eslintrc/universal',
    'imurmurhash',
    'esutils',
    '@eslint-community/regexpp',
    'natural-compare',
    'levn',
    'esquery',
    'ajv/lib/refs/json-schema-draft-04.json',
    'locate-path',
    'path-exists',
    'estraverse',
    'esrecurse',
    'is-extglob',
    '@humanwhocodes/object-schema',
    'brace-expansion',
    'fast-json-stable-stringify',
    'flat-cache',
    'supports-color',
    'resolve-from',
    'parent-module',
    '@nodelib/fs.scandir',
    'ms',
    'uri-js',
    'json-schema-traverse',
    'concat-map',
    'balanced-match',
    'p-locate',
    'keyv',
    'callsites',
    'fastq',
    'has-flag',
    'flatted',
    'type-check',
    'p-limit',
    'json-buffer',
    'reusify',
    'prelude-ls',
    '@nodelib/fs.stat',
    'run-parallel',
    'yocto-queue',
    'queue-microtask',
  ],
});