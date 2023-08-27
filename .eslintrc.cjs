module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  extends: ["@rubiin/eslint-config-typescript"],
  root: true,
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "max-statements-per-line": ["error", { max: 2 }],
  },
};
