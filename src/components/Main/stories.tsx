import { text, withKnobs } from '@storybook/addon-knobs';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Main
    title={text('Title', 'Advanced React Course')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS and Styled Components',
    )}
  />
);