#!/usr/bin/env bash
#cd "${0%/*}"
# ??
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd $SCRIPT_DIR
# go to the folder with every p5 files, get every file names minus their extensions, create a files.json with all theses names.
ls ./src/views/ | sed -e 's/\..*$//'| jq -R -s -c 'split("\n")' > src/files.json