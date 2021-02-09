#!/bin/bash

# Usage
# chmod +x index.sh or git update-index --chmod=+x index.sh

latestTag=$(git describe --tags "$(git rev-list --tags --max-count=1)")

reqVersion="require('$PACKAGEPATH').version"
packageVersion=$(node -p $reqVersion)

echo "$latestTag"
echo "$NPMPACKAGENAME"
echo "$PACKAGEPATH"
echo "$packageVersion"


