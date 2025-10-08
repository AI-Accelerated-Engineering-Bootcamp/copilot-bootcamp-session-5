import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders TODO App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/TODO App/i);
  expect(headingElement).toBeInTheDocument();
});
