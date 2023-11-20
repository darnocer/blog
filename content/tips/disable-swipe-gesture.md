---
title: Disable Swipe to 'Go Back' Gesture
summary: Is it just me or is it unhelpful more times than it is helpful
date: 2023-11-04
aliases: 
tags:
  - efficiency
draft: false
type:
  - tip
layout:
  - PostSimple
category:
  - macos
---

<Callout title="When this is useful" text="If an accidental trigger of the two-finger swipe from left-to-right gesture to 'go back' in your web browser has screwed you over (for example, losing unsaved work😭)... disable that sucker."/>


To disable the gesture in Chrome: 

1. On MacOS, open **Terminal**
2. Enter the command:

```terminal
defaults write com.google.Chrome AppleEnableSwipeNavigateWithScrolls -bool FALSE
```

3. Restart Browser

`TODO::add command for Brave and Wavebox browsers`