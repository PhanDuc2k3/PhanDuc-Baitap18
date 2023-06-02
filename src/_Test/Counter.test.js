import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../_Test/counter';

test('Counters component is rendered', async () => {
  render(<Counter />);
  const btn = await screen.getByText('Count');

  expect(btn).toBeInTheDocument();
});

test('check event click', async () => {
  render(<Counter />);
  const btn = await screen.getByText('Count');
  fireEvent.click(btn);
  const count = await screen.getByText('1');
  expect(count.textContent).toContain('1');
});


