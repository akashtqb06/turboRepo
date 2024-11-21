const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "turbo",
  ],
  globals: {
    React: "writable", // Changed to 'writable' for better clarity
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest:true // Enable ES2021 features
  },
  plugins: ["only-warn", "@typescript-eslint"],
  parser: "@typescript-eslint/parser", // Use the TypeScript parser
  parserOptions: {
    ecmaVersion: 2020, // Support for ES2020 features
    sourceType: "module", // Enable ES module syntax
    ecmaFeatures: {
      jsx: true, // Enable JSX if you're using React
    },
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
      rules: {
        // You can add specific rules for JavaScript and TypeScript files here
      },
    },
  ],
  rules: {
    // Add any custom rules here
  },
};
