#! /usr/bin/env node

import fs from 'fs'
import readline from 'readline'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { splitLine } from './utils'
import pkg from '../package.json'

interface IOptions {
  env?: string
  sample?: string
}

const args = <IOptions>yargs(hideBin(process.argv))
  .usage('Usage: $0 [options]')
  .help('help').alias('help', 'h')
  .version('version', pkg.version).alias('version', 'v')
  .options({
    env: {
      description: '<filename> Input file name',
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

const rl = readline.createInterface({
  input: fs.createReadStream(envPath),
  crlfDelay: Infinity,
})

rl.on('line', (line) => {
  if (line.length === 0)
    fileStream.write('\n')
  else
    fileStream.write(`${splitLine(line)}\n`)
})
