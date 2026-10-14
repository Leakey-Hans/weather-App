import js from "@eslint/js";
import globals from "globals";

export default [
  // 1. Tell ESLint which files to ignore (replaces .eslintignore)
    { 
        ignores: ["node_modules/", "dist/", "build/"] 
    },

  // 2. Base configuration for your source code
    {
        files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
        languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: {
            ...globals.browser,
            ...globals.node
        }
        },
        // 3. Apply recommended rules and your personal tweaks
        rules: {
        ...js.configs.recommended.rules,
        "no-unused-vars": "warn",
        "no-console": "off",
        "semi": ["error", "always"],
        "quotes": ["error", "single"]
        }
    }
];
