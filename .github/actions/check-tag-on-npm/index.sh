#!/bin/bash

# Check also that the tag is not already published on npm
# Usage
# chmod +x index.sh or git update-index --chmod=+x index.sh

# get versions from npm registry
#NPM_PACKAGE_NAME=@dlr-eoc/core-ui
#TAG="v7.2.0"

# remove refs/tags/ and v
TAG=$(printf "%s" "$TAG" | sed 's/refs\///g; s/tags\///g; s/v//g')
if [ ! "$TAG" ];then
  echo "no tag: ${TAG} was provided!"
  exit 1
fi

# get latest version for a package: npm show <package> version
# get all versions published: npm show <package> versions
npmTagsList="$(npm show "$NPM_PACKAGE_NAME" versions)"
npmTagsStr="$(printf "%s" "$npmTagsList" | sed -e "s/'//g; s/\[//g; s/\]//g; s/ //g; s/,//g")"
if [ ! "${npmTagsList}" ];then
  echo "no tags from npm show: ${npmTagsList}"
  exit 1
fi

# create array from npm Tags
IFS=$'\n' read  -d',' -r -a npmTags <<<"$npmTagsStr"
#npmTags=("7.0.0" "7.1.0" "7.2.0" "7.3.0-next.0" "7.3.0-next.1" "7.3.0-next.2" "7.3.0-next.3")


# returns 0 if value is in the array
arrayContains () {
  local e match="$1"
  shift
  for e; do [[ "$e" == "$match" ]] && return 0; done
  return 1
}

arrayContains "$TAG" "${npmTags[@]}"
inarray=$?

if [ "$inarray" == 0 ];then
  echo "tag: ${TAG} is already on npm"
  echo "tags: ${npmTags[*]}"
  exit 1
else
  echo "tag: ${TAG} is not on npm"
  echo "tags: ${npmTags[*]}"
  exit 0
fi

