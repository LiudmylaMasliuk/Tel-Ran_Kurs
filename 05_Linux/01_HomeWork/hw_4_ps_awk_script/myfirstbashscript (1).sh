#!/bin/bash
USER = 'Inna'
date
echo Hello, $USER
pwd
ps -ef | tail -n+2 | wc -l
ps -ef | grep bioset | wc -l | grep -v grep
ls -l /etc/passwd | awk '{print$1}'
