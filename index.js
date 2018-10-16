const { execSync } = require("child_process");

const modules = [
    "babel-eslint",
    "eslint",
    "eslint-config-prettier",
    "eslint-plugin-babel",
    "eslint-plugin-jest",
    "eslint-plugin-prettier",
    "eslint-plugin-react",
    "husky",
    "jest",
    "jest-cli",
    "lint-staged",
    "prettier"
];

execSync(`npm install --save-dev ${modules.join(" ")}`);
