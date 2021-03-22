import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TestRedux from './TestRedux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer, initialState } from '../store/reducer';
import "@testing-library/jest-dom/extend-expect";

const renderWithRedux = (component) => {
  const store = createStore(reducer, initialState);
  return render(<Provider store={store}>
    {component}
  </Provider>);
};

it('test', function () {
  const { getByTestId } = renderWithRedux(<TestRedux />);
  expect(getByTestId('counter')).toHaveTextContent("0");
});

it('test2', function () {
  const { getByTestId } = renderWithRedux(<TestRedux />);
  fireEvent.click(getByTestId('button-up'));
  expect(getByTestId('counter')).toHaveTextContent("1");
});