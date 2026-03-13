// import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

import * as DemoStories from './demo.stories';

const { Default, Reminder, Info, Warning, Speak } = composeStories(DemoStories);

test('renders default info alert', async () => {
  render(<Default />);
  expect(await screen.findByText('Information')).toBeVisible();
  expect(screen.getByRole('alert')).toBeInTheDocument();
});

test('renders reminder alert with correct title', async () => {
  render(<Reminder />);
  expect(await screen.findByText('Action Required')).toBeVisible();
});

test('renders info alert with correct title', async () => {
  render(<Info />);
  expect(await screen.findByText('Did You Know?')).toBeVisible();
});

test('renders warning alert with correct title', async () => {
  render(<Warning />);
  expect(await screen.findByText('Please Note')).toBeVisible();
});

test('renders speak alert with correct title', async () => {
  render(<Speak />);
  expect(await screen.findByText('Operator Guidance')).toBeVisible();
});
