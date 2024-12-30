import StylisticPlugin from '@stylistic/eslint-plugin'
// import { FlatCompat } from '@eslint/eslintrc'

// const compat = new FlatCompat()

// eslint.config.js
export default [
  // ...compat.extends('plugin:@stylistic/recommended'),
  StylisticPlugin.configs['recommended-flat'],
  {
    plugins: {
      stylistic: StylisticPlugin,
    },
    files: [
      '**/*.js',
      '**/*.ts',
      '**/*.tsx',
      '**/*.jsx',
      '**/*.vue',
      '**/*.astro',
    ],
    ignores: [
      '**/node_modules/*',
      '**/dist/*',
      '**/build/*',
      '**/tmp/*',
      '**/deps/*',
      'docs/',
      'postman/',
      '.eslintrc.*',
    ],
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-tabs': 'error',
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],
    },
  },
]
