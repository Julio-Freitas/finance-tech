/* eslint-disable no-undef */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts,jsx,tsx}',
    '!<rootDir>/**/*types.{js,ts,jsx,tsx}',
    '!<rootDir>/**/*.styled.{js,ts,jsx,tsx}',
    '!<rootDir>/**/icons/**',
    '!<rootDir>/**/App.tsx',
    '!<rootDir>/**/main.tsx',
    '!<rootDir>/**/vite-env.d.ts',
    '!<rootDir>/**/index.ts',
  ],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    'src/(.*)': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};
