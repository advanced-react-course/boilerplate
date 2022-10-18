/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env es6, node */

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  experimental: {
    forceSwcTransforms: true,
  },
};

const withProgressiveWebApp = require('next-pwa')({
  dest: 'public',
  disable: !isProduction,
});

const plugins = [withProgressiveWebApp];

module.exports = () => {
  return plugins.reduce((config, plugin) => plugin(config), {
    ...config,
  });
};
