#!/bin/bash

# Pull changes from the remote blog repo
git pull origin master

# Update the content submodule
git submodule update --init --recursive

# Copy only new image assets from content/static/images/posts to public/static/images/posts/
rsync -av --ignore-existing content/static/images/posts public/static/images


echo "Update complete!"
