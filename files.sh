#!/usr/bin/env bash

ls ./src/views/ | sed -e 's/\..*$//'| head -c -1 | jq -R -s -c 'split("\n")' > src/files.json