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
    "unicorn/prefer-module": "off",
    "max-statements-per-line": ["error", { max: 2 }],
    "@typescript-eslint/no-unsafe-assignment": "off", // optimize this
    "@typescript-eslint/no-unsafe-member-access": "off", // optimize this
  },
};
