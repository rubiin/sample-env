#! /usr/bin/env node

import fs from 'fs'
import readline from 'readline'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import pkg from '../package.json'
import { splitLine } from './utils'

interface Options {
  env?: string
  sample?: string
}

const args = <Options>yargs(hideBin(process.argv))
  .usage('Usage: $0 [options]')
  .help('help').alias('help', 'h')
  .version('version', pkg.version).alias('version', 'v')
  .options({
    env: {
      description: '<filename> input file name',
      requiresArg: true,
      required: false,
    },
    sample: {
      description: '<filename> output file name',
      requiresArg: true,
      required: false,
    },
  })
  .argv

const envPath = args.env || '.env'
const samplePath = args.sample || '.env.sample'

const fileStream = fs.createWriteStream(samplePath)

const reader = readline.createInterface({
  input: fs.createReadStream(envPath),
  crlfDelay: Infinity,
})

reader.on('line', (line) => {
  if (line.length === 0)
    fileStream.write('\n')
  else
    fileStream.write(`${splitLine(line)}\n`)
})

console.info('\x1B[32m%s\x1B[0m', `✅ Successfully generated file ${samplePath}`)
