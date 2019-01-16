module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    collectCoverageFrom: ["src/**/*.js"]
}
