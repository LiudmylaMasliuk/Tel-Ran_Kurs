#!/bin/bash

for run in {1..10}
do
echo "commit #" $run >> README.md
date >> README.md

git add ~/Dropbox/Tel-Ran_Kurs/05_Linux/01_HomeWork/hw_6_github/README.md
git commit -m "updated_Date"
git push
done
