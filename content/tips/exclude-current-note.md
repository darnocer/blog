---
title: Exclude current note from DQL query
summary:
date: 2023-11-02
aliases:
tags:
  - dql
draft: true
type:
  - tip
layout:
  - PostSimple
category:
  - obsidian
---

<Callout text="For Obsidian users using Dataview" />

Exclude the current note from the query results:

````
```dataview
LIST
WHERE file.name != this.file.name
```
````
