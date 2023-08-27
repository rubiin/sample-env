# sample-env

<p align="center">
<a href="https://www.npmjs.com/package/sample-env"><img src="https://img.shields.io/npm/v/sample-env" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/sample-env"><img src="https://img.shields.io/npm/dm/sample-env" alt="NPM Downloads" /></a>

# About
Effortlessly create sample environment files tailored to your projects with ease.This cli streamlines the process by effortlessly generating environment files, ensuring all sensitive information is excluded saving you the hassle of manually scrubbing secrets

## How to install

- Install

```sh
npm i sample-env -g
```

## Usage

```sh
sample-env --env .env --sample .env.example --banner "hello world" --removeComments --prefix REACT_APP_
```

This command will:

- take `.env` file
- parse its keys and values
- create banner text at the top of the file
- only include keys that start with `REACT_APP_`
- remove all comments
- dump all the keys and values into the `.env.example` file


## Supported arguments and commands
The cli takes these optional flags.
* --env (default .env) - use this option if you want to use a different file name
  * `--env .env.dev`
* --sample (default .env.sample) - use this option if you want to use a output file name
  * `--sample .env.example`
* --banner - use this option if you want to add a custom banner text at start of file
  * `--banner "hello world"`
* --removeComments - use this option if you don't want to include comments in the file
  * `--removeComments`

## Help Usage

```sh
sample-env --help
  ```
