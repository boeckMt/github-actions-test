#!/bin/bash

for dir in ./dist/*/     # list directories in the form "/tmp/dirname/"
do
    dir=${dir%*/}
    cd "$dir" && npm run testexit && cd ../..
done
