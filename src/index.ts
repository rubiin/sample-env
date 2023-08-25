#! /usr/bin/env node

import fs from "node:fs";
import readline from "node:readline";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import packageJson from "../package.json";
import { splitLine } from "./utils";

interface Options {
  env?: string;
  sample?: string;
  banner?: string;
  removeComments?: boolean;
}

const allArguments = yargs(hideBin(process.argv))
  .usage("Usage: $0 [options]")
  .help("help").alias("help", "h")
  .version("version", packageJson.version).alias("version", "v")
  .options({
    env: {
      description: "<filename> input file name",
      requiresArg: true,
      required: false,
    },
    sample: {
      description: "<filename> output file name",
      requiresArg: true,
      required: false,
    },
    banner: {
      description: "add banner to output file",
      requiresArg: true,
      required: false,
    },
    removeComments: {
      description: "removes comment from output file",
      requiresArg: false,
      required: false,
      boolean: true,
    },
  })
  .argv as Options;

const environmentPath = allArguments.env || ".env";
const samplePath = allArguments.sample || ".env.sample";
const fileStream = fs.createWriteStream(samplePath);

const reader = readline.createInterface({
  input: fs.createReadStream(environmentPath),
  crlfDelay: Number.POSITIVE_INFINITY,
});

if (allArguments.banner)
  fileStream.write(`${allArguments.banner}\n`);

reader.on("line", (line) => {
  if (line.length === 0)
    fileStream.write("\n");
  else if (line.startsWith("#") && allArguments.removeComments)
    fileStream.write("\n");

  else
    fileStream.write(`${splitLine(line)}\n`);
});

console.debug("\u001B[32m%s\u001B[0m", `✅ Successfully generated file ${samplePath}`);
