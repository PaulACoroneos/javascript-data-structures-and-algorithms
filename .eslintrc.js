module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        "no-bitwise": "off",
        "no-lonely-if": "off",
        "class-methods-use-this": "off",
        "arrow-body-style": "off",
        "no-loop-func": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
    }
};
