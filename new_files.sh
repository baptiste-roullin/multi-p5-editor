#!/usr/bin/env bash
#cd "${0%/*}"
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd $SCRIPT_DIR
ls ./src/views/ | sed -e 's/\..*$//'| jq -R -s -c 'split("\n")' > src/files.json