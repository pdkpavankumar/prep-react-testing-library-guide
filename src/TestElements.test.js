import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TestElements from './components/TestElements';
import "@testing-library/jest-dom/extend-expect"

it('should test elements', function () {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('counter')).toHaveTextContent(0);
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

it('should increment', function () {
  const { getByTestId } = render(<TestElements />);
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent('1');
});

it('should decrement', function () {
  const { getByTestId } = render(<TestElements />);
  fireEvent.click(getByTestId('button-down'));
  //expect(getByTestId('counter')).toHaveTextConent('-1');
});