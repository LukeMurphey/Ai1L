# This script deploys the companion-website app to a given directory so that the static app can be
# served by the web-server.
# The environment variable deployPath needs to be set for it to work.

# 1. check the parameter
if [ -z "$deployPath" ]; then
    echo "Need to set the environment variable deployPath"
    exit 1
fi  

echo "Deploying to $deployPath"
cd companion-website

# 2. install the requirements
npm install

# 3. build the app
yarn build

# 4. clear the existing files
rm -rf $deployPath/*

# 5. copy to the path
cp build/* $deployPath
