import { render, screen } from '@testing-library/react';
import Chat from '../components/Chat';
import '@testing-library/jest-dom';

test('renders chat input and send button', () => {
  render(<Chat />);
  expect(screen.getByPlaceholderText('Ask something...')).toBeInTheDocument();
  expect(screen.getByText('Send')).toBeInTheDocument();
});
