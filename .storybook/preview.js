import { StoryFn } from '@storybook/addons';
import GlobalStyles from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];