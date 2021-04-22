#!/bin/bash

# Check also that the tag is not already published on npm
# Usage
# chmod +x index.sh or git update-index --chmod=+x index.sh

# get versions from npm registry
#NPM_PACKAGE_NAME=@dlr-eoc/core-ui
#TAG="v7.3.0"
#npmTagsStr="7.0.0,7.1.0,7.2.0,7.3.0-next.0,7.3.0-next.1,7.3.0-next.2,7.3.0-next.3"

# remove refs/tags/ and v
TAG=$(printf "%s" "$TAG" | sed 's/refs\///g; s/tags\///g; s/v//g')
if [ ! "$TAG" ];then
  echo "no tag:${TAG} was provided!"
  exit 1
fi

# get latest version for a package: npm show <package> version
# get all versions published: npm show <package> versions
npmTagsList="$(npm show "$NPM_PACKAGE_NAME" versions)"
npmTagsStr="$(printf "%s" "$npmTagsList" | sed -e "s/'//g; s/\[//g; s/\]//g; s/ //g")"
if [ ! "${npmTagsList}" ];then
  echo "no tags on npm:${npmTagsList}"
  exit 1
fi

# create array from npm Tags
IFS="," read -r -a npmTags <<< "$npmTagsStr"

for item in "${npmTags[@]}"; do
    if [[ $TAG == "$item" ]];then
      echo "tag:${TAG} is already on npm"
      echo "tags:${npmTagsStr}"
      exit 1
    fi
done

