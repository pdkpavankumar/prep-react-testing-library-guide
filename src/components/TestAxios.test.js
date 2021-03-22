import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import TestAxios from './TestAxios';
import MockAxios from 'axios';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

it('test', function () {
  const { getByTestId } = render(<TestAxios />);
  //const ele = getByTestId('fetch-data');
  //fireEvent.click(ele);
  expect(getByTestId('loading')).toHaveTextContent('Loading...');
});
it('test2', async () => {
  const url = './dfdf';
  const { getByTestId } = render(<TestAxios url={url} />);
  const ele = getByTestId('fetch-data');
  MockAxios.get.mockResolvedValueOnce({
    data: { greeting: 'hello' }
  });
  fireEvent.click(ele);
  const data = await waitForElement(() => getByTestId('show-data'));
  expect(data).toHaveTextContent('hello');
  expect(MockAxios.get).toHaveBeenCalledWith(url)

});