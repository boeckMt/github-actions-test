#!/bin/bash

# Usage
# chmod +x index.sh or git update-index --chmod=+x index.sh

latestTag=$(git describe --tags "$(git rev-list --tags --max-count=1)")

reqVersion="require('$PACKAGE_PATH').version"
packageVersion=$(node -p $reqVersion)

echo "$latestTag"
echo "$NPM_PACKAGE_NAME"
echo "$PACKAGE_PATH"
echo "$NPM_PACKAGE_VERSION"
echo "$packageVersion"


