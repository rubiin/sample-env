# sample-env

Running sample-env will remove all secrets and only generate an env file with the following variables in your env

```

## Usage

- Install

```npm i sample-env --save-dev```

- Add this to your scripts in package.json

```
"scripts": {
  "sample-env": "sample-env"
},
```

- Run as

```npm run sample-env```

## API
The command takes 2 optional flags.
* --env (default .env) - if your .env file is called something else, you can use this flag to change the name like 
  * `--env .enviroment`

* --sample (default .env-sample) - the filename to generate, like 
  * `--sample .env-baseline`
