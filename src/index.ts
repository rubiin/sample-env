#! /usr/bin/env node

import fs from "fs";
import readline from "readline";
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import {splitLine} from "./utils";


interface IOptions{
  env?: string;
  sample?: string;
}

const args = <IOptions>yargs(hideBin(process.argv)).argv

const envPath = args.env || ".env"
const baselinePath = args.sample || ".env-sample"


const fileStream = fs.createWriteStream(baselinePath);

const rl = readline.createInterface({
	input: fs.createReadStream(envPath),
	crlfDelay: Infinity,
});

rl.on("line", (line) => {
	if (line.length === 0) {
		fileStream.write("\n");
	} else {
		fileStream.write(splitLine(line) + "\n");
	}
});
