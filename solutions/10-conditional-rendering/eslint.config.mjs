import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { configs, plugins } from "eslint-config-airbnb-extended";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import babelParser from "@babel/eslint-parser";

const gitignorePath = path.resolve(".", ".gitignore");

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: "js/config",
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
];

const nextConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX A11y Plugin
  plugins.reactA11y,
  // Next Plugin
  plugins.next,
  // Airbnb Next Recommended Config
  ...configs.next.recommended,
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: "prettier/plugin/config",
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: "prettier/config",
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // Next Config
  ...nextConfig,
  // Prettier Config
  ...prettierConfig,
  {
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"],
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".js", ".jsx"],
        },
      ],
      "no-console": "off",
    },
  },
];
