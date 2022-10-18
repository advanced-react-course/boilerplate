import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should render the logo', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByAltText(/application logo/i)).toBeInTheDocument();
  });
});
