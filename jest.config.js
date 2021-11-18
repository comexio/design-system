module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
    modulePathIgnorePatterns: ['demo'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/',
      '^vue$': 'vue/dist/vue.common.js',
      '^~/(.*)$': '<rootDir>/$1',
      "^.+\\.(scss|css)$": "<rootDir>/test/__mocks__/styleMock.js"
    },
    moduleFileExtensions: ['js', 'vue', 'ts'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': 'vue-jest',
      '.*\\.(ts)$': 'ts-jest',
      ".+\\.(png|jpg|jpeg)$": "jest-transform-stub"
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
      '<rootDir>/test/vue.setup.js'
    ]
}
