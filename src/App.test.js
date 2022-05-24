import { render, screen } from '@testing-library/react';
import App from './App';
import staff from './utilities/dummy-data';

test('renders the search bar', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText(/Search for something/i);
  expect(searchElement).toBeInTheDocument();
});

test('renders the stafflist component', () => {
  render(<App />);
  const staffList = screen.getByTestId("staff-list");
  expect(staffList).toBeInTheDocument();
})
