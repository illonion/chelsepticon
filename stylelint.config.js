export default {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  customSyntax: "postcss-scss",
  ignoreFiles: ["dist/**", "build/**", "node_modules/**"],
  rules: {
    "selector-class-pattern": null,
  },
};
