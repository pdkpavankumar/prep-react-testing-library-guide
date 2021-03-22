import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import TestRouter from './TestRouter';
import { createMemoryHistory } from 'history';
import "@testing-library/jest-dom/extend-expect";

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>
    )
  }
}

it('test', function () {
  const { getByTestId, container } = renderWithRouter(<TestRouter />);
  expect(container.innerHTML).toMatch('Home page');
  expect(getByTestId('navbar')).toContainElement(getByTestId('home-link'));
});