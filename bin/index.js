#!/usr/bin/env node
console.log("my-cli")
const { argv } = require('process')
const [command, options] = argv.slice(2)
if (command === 'init') {
  if (options) {
    console.log(`app init with ${options}`)
  } else {
    console.log(`app init by on params`)
  }
}