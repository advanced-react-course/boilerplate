import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import HomeTemplate from '.';

describe('<HomeTemplate />', () => {
  it('should render the HomeTemplate', () => {
    renderWithTheme(<HomeTemplate title="Title" subtitle="Subtitle" />);

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('subtitle')).toBeInTheDocument();
  });
});
