#!/usr/bin/env ts-node

import fs from 'fs'
import path from 'path'

// tslint:disable:no-shadowed-variable
import test  from 'blue-tape'

import { FileBox } from 'file-box'

import Validator  from 'is-my-json-valid'
import JSON5 from 'json5'

test('Validate tsconfig from SchemasSore.org', async t => {
  const fileBox = FileBox.fromUrl('http://json.schemastore.org/tsconfig')
  const buffer = await fileBox.toBuffer()
  const schemaText = buffer.toString()

  const tsconfigSchema = JSON.parse(schemaText)
  const validator = Validator(tsconfigSchema)

  const tsconfigFile = path.join(__dirname, '../tsconfig.json')
  const tsconfigText = fs.readFileSync(tsconfigFile).toString()

  // JSON5 allows commas, comments, and unquoted identifiers,
  // and yet is still 100% compatible with Javascript.
  const tsconfig = JSON5.parse(tsconfigText)

  t.ok(validator(tsconfig), 'tsconfig.json should match the schema')
})
