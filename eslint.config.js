import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,vue}"]
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  skipFormatting,
  {
    rules: {
      "no-unused-vars": "warn",
      semi: "warn",
      "no-console": "warn",
      "no-debugger": "error", // Disallows debugger statements
      eqeqeq: "error", // Requires === and !== instead of == and !=
      curly: "error", // Enforces curly braces in if/else statements
      "no-var": "error", // Disallows var (use let or const instead)
      "prefer-const": "warn", // Suggests using const when variables are not reassigned
      "arrow-parens": ["error", "always"], // Enforces parentheses around arrow function arguments
      indent: ["error", 2], // Enforces 2-space indentation
      "comma-dangle": ["warn", "never"], // Disallows trailing commas
      "object-curly-spacing": ["warn", "always"] // Enforces spaces inside object brackets
    }
  }
];
