---
title: Open File in VSCode Quick Action
summary: 
date: 2023-11-02
aliases: 
tags:
  - macos
draft: false
type:
  - tip
layout:
  - PostSimple
category:
  - vscode
---

<Callout text="Add 'Open in VSCode' to the right-click menu in Mac to quickly open a file directly in Visual Studio Code."/>
## Setup a Quick Action

1. Open **Automator**
2. File > New > **Quick Action**
3. In the right-hand pane: **When workflow receives `current files or folders` in `Finder`**
4. Add an **Image** and **Color** for the Quick Action (Note - you can choose Visual Studio Code from Applications to select the logo as your icon)
5. In the left-hand pane: Under the*Actions* Library, select **Files & Folders**
6. Select **Open Finder Items** and drag it to the right-hand pane
7. **Open With** > **Other...** > Select **Visual Studio Code** from _Applications_
8. **File** > **Save** > name it what you want to call the Quick Action, like _Open in VSCode_

## Test It Out

Right-click on a file or folder you want to open, and select **Open in VSCode** under _Quick Actions_.

![VSCode Quick Action](/static/images/posts/vscode-quick-action.png)
