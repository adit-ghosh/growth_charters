import js from "@eslint/js";
import next from "eslint-config-next";
import typescript from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  js.configs.recommended,
  ...next,
  ...typescript,
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: "es5",
          endOfLine: "auto",
        },
      ],
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "no-console": "warn",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "dist/**", "out/**"],
  },
];

export default config;
