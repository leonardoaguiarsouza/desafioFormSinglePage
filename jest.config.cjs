module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.cjs',
    }
}