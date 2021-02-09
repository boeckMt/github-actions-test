#!/bin/sh

# Usage
# chmod +x index.sh or git update-index --chmod=+x index.sh

latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)

reqVersion="require('${{ inputs.packagePath }}').version"
packageVersion=$(node -p $reqVersion)

packageName="${{ inputs.npmPackageName}}"
latestNpmVerion=$(npm show "$packageName" version)

if [ "${{ inputs.npmPackageVersion }}" ]
then
  latestNpmVerion="${{ inputs.npmPackageVersion }}"
fi


if [ "${latestTag:1}" == "$packageVersion" ] && [ "$packageVersion"  != "$latestNpmVerion" ]
then
  echo "Tag:${latestTag} == repo:${packageVersion} && repo:${packageVersion} != npm:${latestNpmVerion}"
  exit 0
else
  echo "Tag:${latestTag} ?== repo:${packageVersion} && repo:${packageVersion} ?== npm:${latestNpmVerion}"
  exit 1
fi
