import { Meta, StoryObj } from '@storybook/react';
import { HomePageTemplate, HomePageTemplateProperties } from '.';

export default {
  title: 'Templates / Home Page Template',
  component: HomePageTemplate,
} as Meta<HomePageTemplateProperties>;

export const Default: StoryObj<HomePageTemplateProperties> = {
  args: {
    title: 'Hello world',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
};
