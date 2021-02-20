#!/bin/bash

for run in {1..100}
do
date +"%H:%M:%S"
ps -ef | tail -n+2 | wc -l
#sleep 5
done


for run in {1..100}
do
touch /tmp/{50..100}.txt
done

