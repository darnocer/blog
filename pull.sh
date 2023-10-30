# this script both pulls changes from the remote blog repo as well as any content updates from the content submodule 

#!/bin/bash
git pull origin master
git submodule update --init --recursive
