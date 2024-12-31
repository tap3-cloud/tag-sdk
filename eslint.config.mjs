import StylisticPlugin from '@stylistic/eslint-plugin'
import vitest from '@vitest/eslint-plugin' // Add Vitest plugin
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
    languageOptions: {
      globals: {
        // Add Node.js globals
        NodeJS: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    ignores: [
      '**/node_modules/*',
      '**/coverage/*',
      '**/dist/*',
      '**/build/*',
      '**/tmp/*',
      '**/deps/*',
      '**/scripts/concatenated-output.ts',
      'docs/',
      'postman/',
      '.eslintrc.*',
      'rollup.config.js',
      'jest.config.js',
    ],
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
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
  // Vitest configuration
  {
    files: [
      'src/**/*.test.js',
      'src/**/*.test.ts',
      'src/**/*.spec.js',
      'src/**/*.spec.ts',
    ],
    plugins: {
      vitest, // Register Vitest plugin
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
]
