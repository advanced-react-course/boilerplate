import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { HomePageTemplate } from '.';

describe('<HomePageTemplate />', () => {
  it('should render HomePageTemplate component', () => {
    renderWithTheme(<HomePageTemplate title="Title" subtitle="Subtitle" />);

    expect(screen.getByTestId('home-page-template')).toBeInTheDocument();

    expect(screen.getByTestId('title')).toBeInTheDocument();

    expect(screen.getByTestId('subtitle')).toBeInTheDocument();
  });
});
