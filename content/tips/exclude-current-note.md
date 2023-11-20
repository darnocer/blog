---
title: Exclude the current note from DQL query in Obsidian
summary: 
date: 2023-11-06
aliases: 
tags:
  - dql
draft: false
type:
  - tip
layout:
  - PostSimple
category:
  - obsidian
---
<Callout title="When to use" text="When your current note matches your DQL query but you don't want to display it in the list." />

<Callout title="Tools" type="tools" text="Obsidian, Dataview plug-in" />

Exclude the current note from the query results:

````
```dataview
LIST
WHERE file.name != this.file.name
```
````
