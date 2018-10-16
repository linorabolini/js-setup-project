#!/usr/bin/env node

console.log("🙌  Thanks for trying out https://github.com/linorabolini/js-setup-project!")
console.log("")

const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

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
]

execSync(`npm install --save-dev ${modules.join(" ")}`, { stdio: "inherit" })

const templatesDir = path.join(__dirname, "templates")
fs.readdirSync(templatesDir).forEach(file => execSync(`cp ${path.join(templatesDir, file)} .`))
