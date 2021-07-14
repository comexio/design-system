module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
    modulePathIgnorePatterns: ['demo'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/',
      '^vue$': 'vue/dist/vue.common.js',
      '^~/(.*)$': '<rootDir>/$1'
    },
    moduleFileExtensions: ['js', 'vue', 'ts'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': 'vue-jest',
      '.*\\.(ts)$': 'ts-jest'
    },
    collectCoverageFrom: [
      '<rootDir>/src/components/**/*.vue'
    ],
    testMatch: [
      "<rootDir>/test/**/**/*.spec.[jt]s?(x)"
    ],
    globals: {
      'ts-jest': {
        diagnostics: false,
        tsConfig: './test/tsconfig.base.json'
      }
    },
    setupFiles: [
      '<rootDir>/test/vue.setup.ts'
    ]
}
