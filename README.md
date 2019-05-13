# tsconfig

[![NPM Version](https://badge.fury.io/js/%40chatie%2Ftsconfig.svg)](https://www.npmjs.com/package/@chatie/tsconfig)
[![npm (tag)](https://img.shields.io/npm/v/%40chatie/tsconfig/next.svg)](https://www.npmjs.com/package/@chatie/tsconfig?activeTab=versions)
[![Build Status](https://travis-ci.com/Chatie/tsconfig.svg?branch=master)](https://travis-ci.com/Chatie/tsconfig)

![tsconfig.json](https://chatie.github.io/tsconfig/images/typescript-tsconfig-json.jpg)

> Picture: [What is tsconfig.json](https://www.kunal-chowdhury.com/2018/05/typescript-tutorial-tsconfig-json.html)

This module enables other module to inheritance tsconfig.json via Node.js packages

## USAGE

extends from `@chatie/tsconfig` from your tsconfig.json, to have the chatie version of the TypeScript Configuration.

It aim the following goals:

1. Support the latest `esnext` ECMAScript
1. Strict for everything
1. Aiming for Convenience, including the `esModuleInterop` and `resolveJsonModule` etc.

## SEE ALSO

- [TypeScript 3.2 - tsconfig.json inheritance via Node.js packages](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#tsconfigjson-inheritance-via-nodejs-packages)

> TypeScript 3.2 now resolves tsconfig.jsons from node_modules. When using a bare path for the "extends" field in tsconfig.json, TypeScript will dive into node_modules packages for us.
> 
> ```json
> {
>     "extends": "@my-team/tsconfig-base",
>     "include": ["./**/*"]
>     "compilerOptions": {
>         // Override certain options on a project-by-project basis.
>         "strictBindCallApply": false,
>     }
> }
> ```
> 
> Here, TypeScript will climb up node_modules folders looking for a @my-team/tsconfig-base package. For each of those packages, TypeScript will first check whether package.json contains a "tsconfig" field, and if it does, TypeScript will try to load a configuration file from that field. If neither exists, TypeScript will try to read from a tsconfig.json at the root. This is similar to the lookup process for .js files in packages that Node uses, and the .d.ts lookup process that TypeScript already uses.
> 
> This feature can be extremely useful for bigger organizations, or projects with lots of distributed dependencies.
> 

## DEPENDENCES

This module will run a unit test before it could be able to publish to NPM.

The unit test load tsconfig schema from [JSON Schema Store](http://schemastore.org/) and then use [is-my-json-valid](https://www.npmjs.com/package/is-my-json-valid) to validate it.

## HISTORY

### master

### v0.1 May 2019

1. Create a tsconfig base setting module for sharing across projects

## AUTHOR

[Huan LI (李卓桓)](http://linkedin.com/in/zixia) \<zixia@zixia.net\>

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## COPYRIGHT & LICENSE

- Code & Docs © 2019 - now Huan LI \<zixia@zixia.net\>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
