---
title: Commit changes to your blog directly from Obsidian
summary: 
date: 2023-10-29
aliases: 
draft: true
category:
  - tech
content_type:
  - guides
tags:
  - obsidian
  - git
  - dev
layout:
  - PostSimple
status:
  - edit
---


Commit new changes directly from your Obsidian vault to your Next.js blog
Manage blog markdown files directly from Obsidian


1. Setup Obsidian to contain your content repo

Clone the repo 
Create a new blank Github repo
Open your local terminal
Navigate to where you want your vault to be
Git clone the repo

Install Obsidian Git
Setup vault structure to match blog structure
Setup hot keys for git 
commit all changes
push all changes

You're going to clone your content repo to the root directory of your blog app. 

So ensure it works with the same structure as your Obsidian vault. Update your code as needed. 

copy the ssh from the content repo

navigate to the root of your blog repo 

git submodule add [ssh]

you should be able to see the content from the content repo locally 


git add . 
git commit 
git push origin main

Vercel continuous  deployment 

At this point, pushing changes to your blog repo will trigger an automatic deployment to vercel

in prod, you should be able to see the content from your content submodule

trigger deployment when pushing changes from obsidian

this deploy hook will trigger the deployment: 

in vercel settings, go to Git
go to deploy hooks

name: VERCEL_HOOK (this name can be anything descriptive)
branch: main branch of your connected repo
Create hook

copy the hook URL

go to the content repo settings > secrets & variables > new repository secret

Name: VERCEL_HOOK
Secret: paste web hook URL 

the next secret will update the content submodule 

Next go to your profile > developer settings > personal access tokens

generate new token

name: BLOG_UPDATE (this name can be anything descriptive)

Scope: 
repo (all)
workflow


generate token

copy the token 

go back to your content repo
go to the content repo settings > secrets & variables > new repository secret

name: BLOG_UPDATE
secret: paste PAT 


in your content repo, go to the Actions tab
click New Workflow
click setup a workflow yourself

it will open a blank main.yml file

input the following contents

```
name: Update Content Submodule and Deploy to Vercel

on:
  push:
    branches:
      - main # this is the main branch for your content repo 

jobs:
  update-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout blog repository # checkout main blog repo
        uses: actions/checkout@v2
        with:
          repository: darnocer/blog
          token: ${{ secrets.BLOG_UPDATE }} #PAT secret (Github)
          submodules: 'recursive'  # Ensure submodules are initialized and updated.

      - name: Update content submodule # updates content submodule in the blog repo
        run: |
          git submodule update --remote content
          git config user.name "GitHub Action"
          git config user.email "action@github.com"
          git add content
          git commit -m "Update content submodule"
          git push

      - name: Trigger Vercel Deployment # trigger vercel deployment from blog repo with updated content submodule
        run: |
          curl -X POST ${{ secrets.VERCEL_HOOK }}
```


update repository
note the token name BLOG_UPDATE
leave the github action credentials
note the hook name VERCEL_HOOK


commit changes


deploy from blog code push 

In your local blog repo navigate to the content folder
git pull origin main

cd ..

git add . 
git commit -m "submodule update"
git push origin master

this should trigger your automatic deployment with your commit message 
verify in vercel 


deploy from obsidian content push 
you can setup hotkeys for git commands

first pull changes to avoid any conflicts

commit all changes 

psuh all changes 

this should trigger your automatic deployment with the "update content submodule" commit message
verify in vercel
