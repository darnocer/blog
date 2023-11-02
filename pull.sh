#!/bin/bash

# Pull changes from the remote blog repo
git pull origin master

# Update the content submodule
git submodule update --init --recursive

# Copy only new image assets from /content/assets to /public/static/images/tips/
rsync -av --ignore-existing content/assets/ public/static/images/tips/

# Copy only new image assets from /content/assets/posts to /public/static/images/posts/
rsync -av --ignore-existing content/assets/posts/ public/static/images/posts/

echo "Update complete!"
