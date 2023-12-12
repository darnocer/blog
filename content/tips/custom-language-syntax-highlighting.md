---
title: Custom Language Syntax Highlighting
summary: 
date: 2023-12-07
aliases: 
tags:
  - markdown
draft: true
type:
  - tip
layout:
  - PostSimple
category:
  - prism
---
- ! This throws an error with the import statements

Prism.js is a syntax highlighting library that allows you to apply syntax highlighting to most languages when using markdown codeblocks. 

In the rare instance a language is not supported, here is how you would define custom syntax highlighting. 

In my case, I wanted to apply syntax highlighting to `dataview` language, also known as dataview query language or DQL, which is a language specific to making database queries in Obisidian. 

1. **Define Rules for Your Custom Language**
First, create a file for your custom language definition script. I created a `prism` directory in my `lib` folder and created the file `dataview.js`. 

You'll use regex rules to define your tokens. Prism applies the tokens as classes to words within codeblocks per the rules. You can then use the classes to apply CSS. 


```js
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
```


2. **Add the script to the front-end**
Apply the script to front-end code where you process your post content. 

import statements: 
```js
import { useEffect } from 'react'
import Prism from 'prismjs'
import ../lib/prism/dataview
```

useEffect: 
```js
useEffect(() => {
Prism.highlightAll()
}, [])
```

3. **Style the classes**
Add styles to token classes in `prism.css`




