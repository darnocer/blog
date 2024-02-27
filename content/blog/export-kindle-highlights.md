---
title: Export Kindle Highlights to Obsidian
summary: 
date: 2023-11-02
aliases: 
draft: false
category:
  - tech
content_type:
  - guides
tags:
  - productivity
  - reading
  - pkm
layout:
  - PostSimple
---
<Callout text="My Kindle is probably just old at this point (Kindle Paperwhite 7th Generation), but I have the hardest time getting my Notes & Highlights to sync so I can access them from my laptop. If you are also struggling to access your notes and highlights from anywhere other than your Kindle device, then check out these options." />

## Troubleshooting Kindle Syncing Issues

First thing's first... make sure you've done all of these steps:

- [ ] Ensure both devices are connected to the same Wifi
- [ ] Ensure both devices are connected to the same Amazon account
- [ ] Ensure _Whispersync_ is enabled:
  1.  Go to [Manage Your Content and Devices](https://www.amazon.com/mycd)
  2.  Select the **Preferences** tab
  3.  Select **Device Synchronization (Whispersync Settings)** and confirm that the feature is turned **ON**
- [ ] Try to `🔄 Sync` from both devices
- [ ] Disconnect/reconnect account from Kindle App for Mac
- [ ] Disconnect/reconnect account from Kindle device
  - ⚠️ Warning: This caused all of my highlights to disappear from my Kindle device :( However, they were recovered in one of the below methods.

✅ Your sync was successful if the notes & highlights appear in the [web browser notebook here](https://read.amazon.com/notebook)


## Options to Export Highlights from Kindle

### Method 1: Export from Web Notebook

_If you've successfully synced your notebook, you can export the highlights as an HTML file with this method, which can be pasted into Obsidian or your note-taking app_.

Once you are able to see the highlights synced to the web browser notebook [here](https://read.amazon.com/notebook):

1. Select the book whose highlights you want to export
2. On one of the highlights, select the **Options** dropdown > **Open in Kindle** (This should load all of the synced highlights for the book into the Kindle app)
3. From the _Notes & Highlights_ sidebar in the app, click **Export**
4. Click **Save As** > save the document

### Method 2: Export .txt File

_If you're unable to sync your notebook, you can access a text file with all of your book highlights. It is kind of last resort in my opinion as it's not the best format._

1. Plug Kindle into Mac 
	- ^ _note: I needed to use a USB-C cable for my Mac as my device was not recognized when using a USC-C adapter. Using a micro-USB adapter for the Kindle device worked, though._
2. Locate the Device in Finder
3. Go to **Documents**
4. Locate `My Clippings.txt`

### Method 3: Readwise.io (recommended)

In my case, syncing to the web notebook was unreliable— I would go through all of the troubleshooting steps, and sometimes they wouldn't appear for months. Grabbing them from the .txt file kind of sucks. I read a lot and love to revisit notes for insights, so I needed a better way. At one point, I tried de-registering/re-registering my Kindle device in an effort to get them to sync, and all of my highlights disappeared! I was devastated.

I thought all hope was lost, until I found [Readwise](https://readwise.io/) (this reads like an ad, but I swear it's not). With their free trial, I was able to recover all of my lost highlights from the ether and effortlessly sync them to Obsidian. Now, I just have Readwise bring my notes over automatically. If you enjoy reading, particularly non-fiction, Readwise is well worth the subscription fee.
