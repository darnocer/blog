#!/bin/bash

# Pull changes from the remote blog repo
git pull origin master

# Copy only new image assets from content/static/images/posts to public/static/images/posts/
rsync -av --ignore-existing content/static/images/posts public/static/images

# sync to Airtable
npm run sync


echo "Update complete!"
