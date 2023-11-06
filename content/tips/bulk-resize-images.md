---
title: Bulk Resize Images on Mac
summary: Automate resizing multiple images
date: 2023-11-02
aliases:
tags:
  - efficiency
  - macos
draft: true
type:
  - tip
layout:
  - PostSimple
category:
  - macos
---

<Callout text="Create a Quick Action with MacOS's Automator for a one-click option to bulk resize images for web production."/>
## Setup

### Setup the Workflow

1. Open **Automator**
2. Select **Quick Actions**
3. On the right-side pane: **When Workflow receives `image files` in `any application`**
4. Select icon **Image** and **Color** for the workflow
5. On the left-side pane: under _Library_, select **Files and Folders**
6. Select **Get Specified Finder Items** and drag to the right-side pane
7. Under _Library_, select **Photos**
8. Select **Scale Images** and drag to the right-side pane
9. Choose `To Size (pixels)` from the dropdown and specify a size like `800px`
10. **File** > **Save..**. name the file what you would like to call the Quick Action such as _Image Resize_

### Make it a Quick Action

1. Go to **Preferences** > **Extensions**
2. Under Touch Bar or Finder, select _Image Resize_ as a Quick Action
3. If you add it to the Touch Bar, ensure it's configured to access Quick Actions

## Test It Out

1. Open a folder with images you'd like to resize
2. `⌘ A` to select all
3. Either Right-Click > Quick Actions, or select Quick Actions from your Touch Bar
4. Select the **Image Resize** Quick Action you created
