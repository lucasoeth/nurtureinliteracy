#!/bin/bash
cd ~/Desktop/Lucas/Sethunya/nurtureinliteracy
git add .
date=$(date +%m/%d/%Y)
echo 'Something about this push:'
echo ''
read answer
git commit -m "$date $answer"
git push -u origin master
