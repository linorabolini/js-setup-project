#!/usr/bin/env node

console.log("🙌  Thanks for trying out https://github.com/linorabolini/js-setup-project!")
console.log("")

const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const modules = [
    "@babel/cli",
    "@babel/core",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-decorators",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-json-strings",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/preset-env",
    "@babel/preset-react",
    "babel-core@7.0.0-bridge.0",
    "babel-eslint",
    "babel-jest",
    "babel-loader",
    "babel-plugin-import",
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
    "prettier",
    "identity-obj-proxy",
    "webpack"
]

execSync(`yarn add -D ${modules.join(" ")}`, { stdio: "inherit" })

const templatesDir = path.join(__dirname, "templates")
fs.readdirSync(templatesDir).forEach(file => execSync(`cp -r ${path.join(templatesDir, file)} .`))
