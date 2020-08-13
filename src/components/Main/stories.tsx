import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as Meta;

export const Basic: Story = () => (
  <Main
    title={text('Title', 'Advanced React Course')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS and Styled Components',
    )}
  />
);
