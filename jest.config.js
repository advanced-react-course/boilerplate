/* eslint-env es6, node */

function mapModuleNames() {
  const paths = ['pages', 'styles', 'types', 'utils'];
  const componentsPaths = ['templates', 'layouts'];

  const mappedPaths = {
    '^~components(.*)$': '<rootDir>/src/components/shared/$1',
    '^~components/(.*)$': '<rootDir>/src/components/shared/$1',
  };

  for (const path of componentsPaths) {
    mappedPaths[`^~${path}(.*)$`] = `<rootDir>/src/components/${path}/$1`;
    mappedPaths[`^~${path}/(.*)$`] = `<rootDir>/src/components/${path}/$1`;
  }

  for (const path of paths) {
    mappedPaths[`^~${path}(.*)$`] = `<rootDir>/src/${path}/$1`;
    mappedPaths[`^~${path}/(.*)$`] = `<rootDir>/src/${path}/$1`;
  }

  return mappedPaths;
}

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
  moduleNameMapper: {
    ...mapModuleNames(),
  },
};
