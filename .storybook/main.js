/* eslint-env es6, node */

module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
};
