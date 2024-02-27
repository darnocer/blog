---
title: Quickly open different code files
summary: Visual Studio Code workspace and bash alias
date: 2024-01-05
aliases: 
draft: true
category:
  - tech
content_type:
  - guides
tags:
  - obsidian
layout:
  - PostSimple
status:
  - edit
---

I frequently access my `snippet.css` file to add custom CSS to my Obsidian vaults. I have two separate vaults, so sometimes I want to add the CSS for both vaults. Here is my setup to quickly access both files: 

1. Open any files you want to quickly access in Visual Studio Code. In my case, this is two `snippet.css` files from my respective vaults. 

Note - to access the `snippet.css` files for a vault, you need to show hidden files by going to your vault directory and using the command `⌘ ⇧ .` to reveal the `.obsidian` folder which contains `snippets` > `snippet.css`. 

2. In Visual Studio Code, go to `File` > `Save Workspace As...` and save the workspace. I saved it to my "Obsidian" folder that contains my two vaults. 

3. Locate the workspace you just saved in finder, and copy the filepath by right-clicking the `.code-workspace` file and holding the `⌥` key and then click `Copy yourworkspace.code-workspace as Pathname`

4. For a bash terminal, open your terminal and type the command `nano ~/.bash_profile` to open the Bash profile in the Nano editor

5. You might see some other contents in the file but go to the end of the file and add this line: 

```bash
alias editsnippet="code /path/to/your/workspace.code-workspace"
```

`editsnippet` can be whatever you want your command to be to open the workspace. 
`/path/to/your/workspace.code-workspace` is where you'll paste the pathname you copied

6. `Ctrl + O` to save, then press `Enter` to confirm, then `Ctrl + X` to exit the Nano editor

7. Enter `source ~/.bash_profile` to reload your profile 

8. Enter your command (eg. `editcss`) to open your workspace

If you get a `command not found` error: 

1. Check that you have the `code` command installed by entering `code --version`
2. If this results in a `command not found` error, open Visual Studio Code
3. Enter `⌘ ⇧ P` to open the command palette and type `Shell Command: Install 'code' command in PATH`
4. You should see a confirmation that `code` was installed
5. Return to your terminal and enter your open workspace command (eg. `editcss`)


- - -


To open a filepath, not a code workspace, use the `open` command in the alias instead. 

Note— if there's spaces in the filepath, you'll need to wrap it in single quotes. 

```bash
alias openfile="open '/path/to/your/file/with/spaces/exammple file.txt'"
```

