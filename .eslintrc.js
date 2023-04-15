/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "airbnb", "airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["./src/app/api/**/*"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
};
