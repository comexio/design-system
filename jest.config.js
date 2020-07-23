module.exports = {
    modulePathIgnorePatterns: ['demo'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '^appRoot/(.*)$': '<rootDir>/$1',
      '^vue$': 'vue/dist/vue.common.js'
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
