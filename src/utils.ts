import fs from "node:fs";
import { homedir } from "node:os";
import readline from "node:readline";
import path from "node:path";
import process from "node:process";
import chalk from "chalk";

const defaultEnvironmentPath = `${homedir()}/.env.rc`;

export interface Options {
  env?: string
  sample?: string
  banner?: string
  prefix?: string
  removeComments?: boolean
}

/**
 * The function `splitLine` takes a string as input and splits it into two parts at the first
 * occurrence of the "=" character, returning the first part followed by the "=" character if it
 * exists.
 * @param line - The `line` parameter is a string that represents a line of text.
 * @returns The function `splitLine` returns a string. If the input `line` does not contain the
 * character "=", it returns the input `line` as is. Otherwise, it returns the input `line` with the
 * "=" character appended at the end.
 */
export function splitLine(line: string) {
  const result = line.split("=");

  if (result.length === 1)
    return result[0];
  return `${result[0]}=`;
}

/**
 * The function `readConfigFile` reads a JSON configuration file from the specified path and returns
 * the parsed content as an `Options` object.
 * @param path - The `path` parameter is a string that represents the file path of the
 * configuration file that needs to be read.
 * @returns a parsed JSON object as an Options type.
 */
export function readConfigFile(path: string) {
  const config = fs.readFileSync(path, "utf8");

  return JSON.parse(config) as Options;
}

/**
 * The function `getDefaultConfigFile` checks if a default configuration file exists, and if not,
 * creates one with default values and returns it.
 * @returns The function `getDefaultConfigFile` returns the `defaultConfig` object if the
 * `defaultEnvironmentPath` file does not exist. Otherwise, it returns the result of calling the
 * `readConfigFile` function with the `defaultEnvironmentPath` as an argument.
 */
export function getDefaultConfigFile() {
  if (!fs.existsSync(defaultEnvironmentPath)) {
    const defaultConfig = {
      env: ".env",
      sample: ".env.sample",
      banner: "# This is a sample file generated by sample-env",
      removeComments: false,
    } as Options;

    fs.writeFileSync(
      defaultEnvironmentPath,
      JSON.stringify(defaultConfig, undefined, 2),
    );

    return defaultConfig;
  }
  return readConfigFile(defaultEnvironmentPath);
}

/**
 * The function checks if a configuration file exists and returns either the default configuration file
 * or the contents of the existing file.
 * @returns either the default config file or the contents of the existing config file.
 */
export function getCongfigFile() {
  const configFileExists = fs.existsSync(path.resolve(".envrc"));
  if (!configFileExists)
    return getDefaultConfigFile();
  return readConfigFile(defaultEnvironmentPath);
}

/**
 * The `writeEnvironment` function reads a configuration file, filters out lines based on specified
 * prefixes, and writes the remaining lines to a new file.
 * @param allArguments - An object that contains all the arguments passed to the function.
 */
export function writeEnvironment(allArguments: Options) {
  const configFile = getCongfigFile();

  const environmentPath = path.resolve(allArguments.env ?? configFile.env);
  if (!fs.existsSync(environmentPath)) {
    console.error(
      chalk.red(`❌ Config file not found at path: ${environmentPath}`),
    );
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(0);
  }

  const samplePath = path.resolve(allArguments.sample ?? configFile.sample);
  const banner = allArguments.banner ?? configFile.banner;
  const removeComments
    = allArguments.removeComments ?? configFile.removeComments;
  const prefix = allArguments?.prefix;
  const fileStream = fs.createWriteStream(samplePath);

  // convert comma separated prefix to array
  const prefixArray
    = prefix && typeof prefix === "string" && prefix.includes(",")
      ? prefix.split(",")
      : prefix;

  const reader = readline.createInterface({
    input: fs.createReadStream(environmentPath),
    crlfDelay: Number.POSITIVE_INFINITY,
  });

  if (banner)
    fileStream.write(`${banner}\n`);

  reader.on("line", (line) => {
    if (
      (line.length === 0 && !prefix)
      || (line.startsWith("#") && removeComments)
    ) {
      fileStream.write("\n");
    }
    else {
      // if prefix exists and the line doesn't has any prefix , write nothing
      if (
        prefixArray
        && Array.isArray(prefixArray)
        && !prefixArray.some(element => line.startsWith(element))
      )
        return;
      fileStream.write(`${splitLine(line)}\n`);
    }
  });

  console.debug(
    chalk.blue("🚀 Successfully generated file at:")
      + chalk.green(` ${samplePath}`),
  );
}
