// prism-dataview.js
import Prism from 'prismjs'

Prism.languages.dataview = {
  comment: /\/\/.*/,
  keyword: /\b(TABLE WITHOUT ID|FROM|FLATTEN|WHERE|GROUP BY|AND|OR|this)\b/,
  function: /\b(map|contains|econtains)\(\)/,
  operator: /=|=>|!=/,
  variable: /#[\w\/]+/,
  string: {
    pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
  },
  punctuation: /[.,()]/,
}
