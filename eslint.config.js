import rubiin from "@rubiin/eslint-config";

export default rubiin(
  {
    stylistic: true, // enable stylistic formatting rules
    typescript: {
      tsconfigPath: "tsconfig.json",
    }
  },
  {
    rules: {
      "max-statements-per-line": ["error", { max: 2 }],
      "no-console": ["error", { allow: ["debug", "error"] }],
    },
  }
);
