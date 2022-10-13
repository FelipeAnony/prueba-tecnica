module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/domain',
    '<rootDir>/src/data/protocols',
    '<rootDir>/src/main',
    '<rootDir>/src/presentation/router',
    '<rootDir>/src/presentation/hooks',
    '<rootDir>/src/presentation/pages',
    '<rootDir>/src/store',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
