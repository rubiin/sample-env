# sample-env

<p align="center">
<a href="https://www.npmjs.com/package/sample-env"><img src="https://img.shields.io/npm/v/sample-env" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/sample-env"><img src="https://img.shields.io/npm/dm/sample-env" alt="NPM Downloads" /></a>
  
# About
Easily generate sample environment files for your projects.
Running sample-env will remove all secrets and only generate an env file with the following variables in your env

## How to install

- Install

```sh
npm i sample-env -g
```

## Usage
  
  ```sh
    sample-env
  ```

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
