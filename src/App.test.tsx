import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// describe('App', () => {
it('The input field exists in the login screen', () => {
  render(<App />);
  const inputField = screen.getByRole('textbox');
  expect(inputField).toBe(true);
});

it('User types in their username and it shows current users name', () => {
  render(<App />);

  userEvent.type(screen.getByRole('textbox'), 'shubv92');
  expect(screen.getByRole('textbox')).toHaveValue('shubv92');
});

it('User types in their username and it shows current users name', () => {
  render(<App />);

  userEvent.type(screen.getByRole('textbox'), 'shubv92');

  const currentUserHeader = screen.getByRole(
    'heading'
    // , {name: /signed in as:shubv92/i,}
  );

  expect(currentUserHeader).toHaveValue('shubv92');
});
// });
