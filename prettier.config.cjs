/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: 'es5',
  bracketSpacing: true,
  printWidth: 80,
  useTabs: false, // Add this to enforce spaces
  indent: 2, // Add this to match tabWidth
  indentStyle: 'space', // Add this to match tabWidth
  trimTrailingWhitespace: true, // Add this for trailing spaces
}
