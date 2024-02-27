---
title: Bulk update daily note date format
summary: 
date: 2023-12-21
aliases: 
draft: true
category:
  - tech
content_type:
  - snippets
tags:
  - obsidian
layout:
  - PostSimple
status:
  - edit
---

I had been using Daily Notes in Obsidian, and the note format was `MM-DD-YYYY` so when sorting the notes in my note archive, notes from different years were jumbled together. 

Always make a backup before running a script. I copied all of the note files into a separate folder. 

1. Open terminal and navigate to the folder containing your notes
2. Paste the following script in the terminal 

```bash
for f in *.md; do 
  if [[ $f =~ ^([0-9]{2})-([0-9]{2})-([0-9]{4}).md$ ]]; then 
    mv "$f" "${BASH_REMATCH[3]}-${BASH_REMATCH[1]}-${BASH_REMATCH[2]}.md"; 
  fi; 
done
```

This will loop through all files and rename files matching `MM-DD-YYYY` to `YYYY-MM-DD` format. Any files not exactly matching the `MM-DD-YYYY` format will be skipped and left unchanged. 

If all looks good, delete the original files from your note archive, and replace them with the renamed files. 