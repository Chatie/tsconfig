# tsconfig

tsconfig.json inheritance via Node.js packages

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
