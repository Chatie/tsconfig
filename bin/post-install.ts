#!/usr/bin/env node

import fs     from 'fs'
import path   from 'path'

import pkgUp from 'pkg-up'

const TSCONFIG_JSON_CONTENT = `{
  "extends": "@chatie/tsconfig",
  "compilerOptions": {
    "outDir": "dist",
  },
  "exclude": [
    "node_modules/",
    "dist/",
    "tests/fixtures/",
  ],
  "include": [
    "app/**/*.ts",
    "bin/*.ts",
    "bot/**/*.ts",
    "examples/**/*.ts",
    "scripts/**/*.ts",
    "src/**/*.ts",
    "tests/**/*.spec.ts",
  ],
}`

async function main (): Promise<number> {
  const pkg = await pkgUp()
  if (!pkg) {
    console.info('@chatie/tsconfig: failed to find package directory.')
    return 1
  }
  const pkgDir = path.dirname(pkg)

  const tsconfigFile = path.join(pkgDir, 'tsconfig.json')

  if (!fs.existsSync(tsconfigFile)) {
    console.info(`@chatie/tsconfig: auto generated ${tsconfigFile}`)
    fs.writeFileSync(tsconfigFile, TSCONFIG_JSON_CONTENT)
  }
  return 0
}

main()
.then(process.exit)
.catch(e => {
  console.error(e)
  process.exit(1)
})
