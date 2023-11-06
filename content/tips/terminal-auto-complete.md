---
title: Enable auto-complete in Bash terminal
summary:
date: 2023-11-02
aliases:
tags:
  - efficiency
draft: true
type:
  - tip
layout:
  - PostSimple
category:
  - terminal
---

<Callout text="Using `[tab]` to auto-complete my `cd` commands has always worked in the Bash terminal in VScode by default. When I started using my standalone terminal more, it was not working that way and it was really messing up my flow! Follow these steps to enable auto-complete in your standalone terminal."/>

For example, if you are navigating a directory like the below with your terminal:

```bash
├─ home/
│  ├─ documents/
│  ├─ downloads/
│  ├─ media/
```

You should be able to type `cd doc` and then press `[tab]` to auto-complete your command to `cd documents/`.

To enable 'tab to auto-complete' in your standalone Bash terminal, follow these steps:

1. In your home directory type:

```bash
touch ~/.inputrc
nano ~/.inputrc
```

2. Add the following lines:

```bash
"\e[A": history-search-backward
"\e[B": history-search-forward
set show-all-if-ambiguous on
set completion-ignore-case on
```

3. Exit: `ctrl + X`
4. Yes: `Y`
5. Confirm: `Enter`
6. Restart the terminal
