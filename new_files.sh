#!/usr/bin/env bash
#cd "${0%/*}"
ls ./src/views/ | sed -e 's/\..*$//'| jq -R -s -c 'split("\n")' > src/files.json