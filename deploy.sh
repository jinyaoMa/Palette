#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd "build"

# if you are deploying to a custom domain
echo 'blog.ma-jinyao.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jinyaoMa/Palette.git master:gh-pages

cd -