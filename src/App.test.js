import React from 'react';
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it('should take a snapshot', function () {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});