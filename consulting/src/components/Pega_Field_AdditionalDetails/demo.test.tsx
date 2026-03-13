import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

import * as DemoStories from './demo.stories';

const { BasePegaFieldAdditionalDetails } = composeStories(DemoStories);

// ─── Mock window.PCore ────────────────────────────────────────────────────────

const mockGetDataAsync = jest.fn();

beforeEach(() => {
  mockGetDataAsync.mockResolvedValue({
    data: [
      {
        pyID: 'C-123',
        Status: 'Open',
        Owner: 'admin@mediaco'
      }
    ]
  });

  (window as any).PCore = {
    getDataPageUtils: () => ({
      getDataAsync: mockGetDataAsync
    })
  };
});

afterEach(() => {
  jest.clearAllMocks();
  delete (window as any).PCore;
});

// ─── Tests ────────────────────────────────────────────────────────────────────

test('renders the trigger button', () => {
  render(<BasePegaFieldAdditionalDetails />);
  const btn = screen.getByRole('button', { name: /view details/i });
  expect(btn).toBeInTheDocument();
});

test('does not show modal content before button is clicked', () => {
  render(<BasePegaFieldAdditionalDetails />);
  expect(screen.queryByText('C-123')).not.toBeInTheDocument();
});

test('opens the modal and shows fetched data after clicking the button', async () => {
  render(<BasePegaFieldAdditionalDetails />);

  const btn = screen.getByRole('button', { name: /view details/i });
  fireEvent.click(btn);

  // The modal should appear with the mocked data
  await waitFor(() => {
    expect(screen.getByText('C-123')).toBeVisible();
  });
  expect(screen.getByText('Open')).toBeVisible();
  expect(screen.getByText('admin@mediaco')).toBeVisible();
});

test('calls the data page with the correct parameters', async () => {
  render(<BasePegaFieldAdditionalDetails />);

  fireEvent.click(screen.getByRole('button', { name: /view details/i }));

  await waitFor(() => {
    expect(mockGetDataAsync).toHaveBeenCalledTimes(1);
  });
  // First argument should be the data page name from configProps
  expect(mockGetDataAsync.mock.calls[0][0]).toBe('D_RowDetails');
});
