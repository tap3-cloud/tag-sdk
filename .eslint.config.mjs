import StylisticPlugin from '@stylistic/eslint-plugin'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

// eslint.config.js
export default [
  ...compat({
    extends: ['plugin:@stylistic/recommended'],
  }),
  {
    plugins: {
      stylistic: StylisticPlugin,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/prefer-const': 'error',
      '@stylistic/no-var': 'error',
      '@stylistic/no-unused-vars': 'warn',
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
