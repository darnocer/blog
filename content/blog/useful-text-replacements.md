---
title: Useful Text Replacement Shortcuts
summary: 
date: 2024-02-24
aliases: 
draft: true
category:
  - tech
content_type:
  - snippets
tags:
  - efficiency
layout:
  - PostSimple
status:
  - in-progress
---

You can setup "text replacements" that will replace text that you type with different text or symbols. Here are some of the text replacements I have setup for my workflows that you may find useful!

> [!info] To setup text replacements on MacOS: 
> System Preferences > Keyboard > Text Input > Text Replacements...


- i Note: Text replacements will show as you're typing, and automatically replace the text when you type `space`. To avoid a text replacement, you can use `esc` when the suggestion pops up. 

| Replace      | With                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `--`         | —                                                                                                                                                                                                                                                                                                                                                                                                                                                               | em dash                 |
| `-->`        | →                                                                                                                                                                                                                                                                                                                                                                                                                                                               | right arrow             |
| `<--`        | ←                                                                                                                                                                                                                                                                                                                                                                                                                                                               | left arrow              |
| `--v` \*     | ↓                                                                                                                                                                                                                                                                                                                                                                                                                                                               | down arrow              |
| `--^`        | ↑                                                                                                                                                                                                                                                                                                                                                                                                                                                               | up arrow                |
| `[.]`        | •                                                                                                                                                                                                                                                                                                                                                                                                                                                               | bullet                  |
| `.class`     | `<span class="class">`                                                                                                                                                                                                                                                                                                                                                                                                                                          | insert a custom class** |
| `.span`      | `</span>`                                                                                                                                                                                                                                                                                                                                                                                                                                                       | closing tag             |
| `@command`   | ⌘                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                         |
| `@option`    | ⌥                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                         |
| `@shift`     | ⇧                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                         |
| `@lorem`     | `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`                                                                                                                                                                                                                                                                                                                                   | Good ol lorem ipsum     |
| `@shrug`     | `¯\_(ツ)_/¯`                                                                                                                                                                                                                                                                                                                                                                                                                                                     | I like this guy         |

Other uses:
* **Email** - setup replacements for your email address. I use `@@` and `@@@` for my personal, and professional email, respectively
* **Address** - My 4-number house number expands into my full street address (eg. `1234` → `1234 Anywhere St Apt X`)
* **Phone number** - My area code expands to my full phone number (eg. `555` → `5555555555`)
* **Rewards numbers** - I use  `@Marriot` / `@Hilton` / `@United` / etc to expand my travel rewards accounts numbers 

- - -

\*I have two hyphens (`--`) auto-replaced by an an em dash (`—`). I use `--v` for `↓`. If I just type out the down arrow text (`--v`), the hyphens convert and the text becomes `—v` which then doesn't get replaced by `↓`. So when you type `--` you can hit `esc` before typing the `v`. Alternatively, you can just setup a text replacement to replace `—v` (using the converted em dash instead of two hyphens) with the down arrow. 


\*\* One of the custom classes I use to insert custom formatting for subheadings in Obsidian is `.underline` (using the `.span` shortcut to add the closing tag.) It looks like this: 

<span class="full-underline">Underline class</span> 

and the snippet is: 

```css
.underline {
	border-bottom: 1px solid #39ba91;
	display: inline-block;
	width: 100%;
	font-weight: bold;
}
```

