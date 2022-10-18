/* eslint-env es6, node */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    storyStoreV7: true,
    integrationsDebugger: true,
  },
  staticDirs: ['../public'],
  stories: ['../src/**/*.mdx', '../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    'storybook-addon-designs',
    'storybook-addon-pseudo-states',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  },
};
