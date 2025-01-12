module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  overrides: [
    {
      files: ['*.mdx', '*.md'],
      options: {
        proseWrap: 'never', // Prevent wrapping
        htmlWhitespaceSensitivity: 'ignore', // Ignore whitespace in inline HTML
        embeddedLanguageFormatting: 'off', // Avoid formatting embedded code
      },
    },
  ],
}
