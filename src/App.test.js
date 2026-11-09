import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /mahamadou adam/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /projects/i })
  ).toBeInTheDocument();
});
