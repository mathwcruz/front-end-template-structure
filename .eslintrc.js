module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "simple-import-sort",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      {
        usePrettierrc: true,
      },
    ],
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unused-state": "warn",
    "react/prop-types": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "global-require": "off",
    camelcase: "off",
    "no-use-before-define": "off",
    "no-shadow": "warn",
    "no-await-in-loop": "warn",
    "no-unused-vars": "warn",
    "no-nested-ternary": "off",
    "import/no-cycle": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
