import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the search bar', () => {
  render(<App />);
  // const linkElement = screen.getByPlaceHolderText(/Search for something/i);
  const searchElement = screen.getByPlaceholderText(/Search for something/i);
  expect(searchElement).toBeInTheDocument();
});
