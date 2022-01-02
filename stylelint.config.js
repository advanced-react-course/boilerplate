/* eslint-env es6, node */

module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-styled-components',
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-length': 'long',
    'number-leading-zero': 'always',
    'string-quotes': 'single',
    'declaration-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }],
    'scss/at-rule-no-unknown': true,
  },
};
