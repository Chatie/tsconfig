#!/usr/bin/env bash
set -e

npm run dist
npm pack

TMPDIR="/tmp/npm-pack-testing.$$"
mkdir "$TMPDIR"
mv *-*.*.*.tgz "$TMPDIR"
cp -R tests/fixtures/* "$TMPDIR"

pushd $TMPDIR

npm init -y
npm install --production \
  *-*.*.*.tgz

./node_modules/.bin/tsc \
  --lib esnext \
  --strict \
  --esModuleInterop \
  --noEmitOnError \
  --noImplicitAny \
  --skipLibCheck \
  smoke-testing.ts

node smoke-testing.js

popd
