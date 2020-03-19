# This script deploys the companion-website app to a given directory so that the static app can be
# served by the web-server.
# The environment variable deployPath needs to be set for it to work.

# 1. check the parameter
if [ -z "$deployPath" ]; then
    echo "Need to set the environment variable deployPath"
    exit 1
fi  

echo "Deploying to $deployPath"

# 2. build the app
cd companion-website
yarn build

# 3. clear the existing files
rm -rf $deployPath/*

# 4. copy to the path
cp build/* $deployPath
