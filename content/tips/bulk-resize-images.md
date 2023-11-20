---
title: Resize images in bulk
summary: Resize a library of images for your website with one-click
date: 2023-11-02
aliases: 
tags:
  - efficiency
  - macos
draft: false
type:
  - tip
layout:
  - PostSimple
category:
  - macos
---

<Callout title="When this is useful" text="Quickly resize a library of full-size photos to upload to your website."/>


<Callout title="Tools" text="MacOS, Automator" type="tools"/>
## Setup

### Setup the workflow

1. Open **Automator**
2. Select **Quick Actions**
3. On the right-side pane: **When Workflow receives** `image files` **in** `any application`
4. Select icon **Image** and **Color** for the workflow
5. On the left-side pane: under _Library_, select **Files and Folders** > drag **Get Specified Finder Items** to the right-side pane
7. Under _Library_, select **Photos** > Drag **Scale Images** to the right-side pane
9. Choose `To Size (pixels)` from the dropdown and specify a size like `700px`
10. **File** > **Save..**. name the file what you would like to call the Quick Action such as _Image Resize_


![Image Resize](/static/images/posts/image-resize.png)
### Make it a Quick Action

1. Go to **Preferences** > **Extensions**
2. Under **Finder**, select your _Image Resize_ workflow as a Quick Action to make it available from the right-click menu in Finder 
3. You can also enable the Quick Action for your **Touch Bar**. If you add it to the Touch Bar, you'll want to make sure your Touch Bar is configured to have a Quick Actions button. 

## Test it out

1. Open a folder with images you'd like to resize
2. Make a copy of the folder if you'd like to retain the original image files 
3. In your duplicated folder, `⌘ A` to select all > right-click > Quick Actions > *Image Resize*  (or select it from your Touch Bar)

![Quick Actions](/static/images/posts/quick-actions.png)



<Callout title="Additional Tip" text="You can also setup a Quick Action with Automator to rename your image files."/>