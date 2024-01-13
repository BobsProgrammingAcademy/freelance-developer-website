import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/Home';

const renderApp = () => {
  render(<Home />);

  return { user: userEvent.setup() };
};

describe('Home page', () => {
  it('should render the elements on the Home page', async () => {
    renderApp();

    expect(
      await screen.findByText(
        /I am a freelance web developer who builds elegant, fast, and scalable web applications/i
      )
    ).toBeInTheDocument();
  });
});
