module.exports = {
  '*.md': 'prettier --write .',
  // Run ESLint on changes to JavaScript/TypeScript files
  '*.{js,ts,tsx,jsx,vue,astro}': [
    'prettier --write .',
    'eslint --fix . --ext .js,.jsx,.ts,.tsx,.vue,.astro --max-warnings 0',
  ],
}
