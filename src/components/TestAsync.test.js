import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import TestAsync from './TestAsync';
import "@testing-library/jest-dom/extend-expect";

it('test', async function () {
  const { getByTestId, getByText } = render(<TestAsync />);
  fireEvent.click(getByTestId('button-up'));
  const counter = await waitForElement(() => getByText('1'));
  expect(counter).toHaveTextContent(1);
});