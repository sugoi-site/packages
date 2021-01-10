module.exports = {
  plugins: [
    [
      'prismjs',
      {
        languages: ['bash', 'go', 'typescript', 'css', 'html', 'yaml', 'json'],
        plugins: ['line-numbers', 'show-language'],
        theme: 'okaidia',
        css: true
      }
    ]
  ]
}
