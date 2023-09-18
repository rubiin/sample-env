#! /usr/bin/env node

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import packageJson from "../package.json";
import { writeEnvironment } from "./utils";

interface Options {
  env?: string;
  sample?: string;
  banner?: string;
  prefix?: string;
  removeComments?: boolean;
}

const allArguments = yargs(hideBin(process.argv))
  .usage("Usage: $0 [options]")
  .help("help")
  .alias("help", "h")
  .version("version", packageJson.version)
  .alias("version", "v")
  .options({
    env: {
      description: "<filename> input file name",
      requiresArg: true,
      required: false,
      alias: "e",
    },
    sample: {
      description: "<filename> output file name",
      requiresArg: true,
      required: false,
      alias: "s",
    },
    banner: {
      description: "add banner to output file",
      requiresArg: true,
      required: false,
      alias: "b",
    },
    removeComments: {
      description: "removes comment from output file",
      requiresArg: false,
      required: false,
      boolean: true,
      alias: "r",
    },
    prefix: {
      description:
        "List of string prefixes to use only certain env variables, could be an empty string to use all available variables.",
      requiresArg: true,
      required: false,
      alias: "p",
    },
  }).argv as Options;

export const main = () => {
  writeEnvironment(allArguments);
};

main();
