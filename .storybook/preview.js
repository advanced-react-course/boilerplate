import { withTests } from '@storybook/addon-jest';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ThemeProvider } from 'styled-components';
import results from '../.jest-test-results.json';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

initialize();

export const decorators = [
  mswDecorator,
  withTests({ results }),
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
