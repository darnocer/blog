---
title: Disable Swipe to Go Back Gesture
summary: It's not helpful more times than it is
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
  - macos
---

<Callout text="A two-finger swipe from left-to-right is the gesture to go 'back' in your web browser. I love quick gestures and hot keys, but this one screwed me over more times than it was helpful by accidentally triggering it."/>
This disables the gesture in Chrome:

1. On MacOS, open **Terminal**
2. Enter the command:

```bash
defaults write com.google.Chrome AppleEnableSwipeNavigateWithScrolls -bool FALSE
```

3. Restart Browser
