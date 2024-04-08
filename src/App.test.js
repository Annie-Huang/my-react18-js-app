import { render, screen } from '@testing-library/react';
import WeatherDashboard from './App';

test('renders learn react link', () => {
  render(<WeatherDashboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
