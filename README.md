<p align="center">
<a href="https://www.npmjs.com/package/sample-env"><img src="https://img.shields.io/npm/v/sample-env" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/sample-env"><img src="https://img.shields.io/npm/dm/sample-env" alt="NPM Downloads" /></a>
  
# sample-env


# About
Running sample-env will remove all secrets and only generate an env file with the following variables in your env

## How to install

- Install

```sh
npm i sample-env --save-dev
```

## Usage

- As cli
  
  ```sh
    sample-env
  ```

- You can also add this to your scripts in package.json

```sh
"scripts": {
  "sample-env": "sample-env"
}
```

- Run as

```sh
    npm run sample-env
```

## Supported arguments and commands
The command takes 2 optional flags.
* --env (default .env) - if your .env file is called something else, you can use this flag to change the name like 
  * `--env .env.dev`

* --sample (default .env.sample) - the filename to generate, like 
  * `--sample .env.example`

## Help Usage
  
  ```sh
    sample-env --help
  ```
