---
title: Tip Example 1
summary: This is a summary
date: 2023-10-01
aliases:
tags:
  - test
  - sample
draft: true
type:
  - tip
layout:
  - PostSimple
category:
  - webflow
---

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae **vestibulum**. Donec in efficitur ipsum, _in egestas orci_. Maecenas libero nisi, pellentesque vel pretium eu, [link to somewhere](https://chat.openai.com/c/b381a204-bd2f-45b4-a464-ca9434d9cbf1#).

## Heading 2

1. Fusce at massa
2. Commodo cursus magna
3. Ultricies vehicula

> "Quote: Phasellus convallis elit id _urna ultricies_, quis convallis purus **mattis**."

```javascript
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const num = getRandomNumber(1, 100)
console.log(`Random number between 1 and 100: ${num}`)
```

## Another Heading 2

Duis cursus, mi quis `viverra ornare`, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus:

- Mollis interdum
- Fusce dapibus
- Tellus ac cursus

### Subheading

This is a checklist:

- [x] Item 1

- [x] Item 2

- [x] Item 3

#### Dataview styling

```dataview
TABLE WITHOUT ID map(rows, (r) => link(r.file.link, r.title)) AS Snippets
FROM #type/snippet
FLATTEN file.etags AS Tag
WHERE contains(Tag, "#tech/")
GROUP BY Tag
WHERE !contains(file.path,this.file.path) AND econtains(this.file.etags, Tag)
```
