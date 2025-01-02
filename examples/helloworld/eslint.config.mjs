// import eslintGlobalConfig from '../../eslint.config.mjs'
import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs['recommended'],
  {
    rules: {
      // Add custom rules here
    },
  },
]
