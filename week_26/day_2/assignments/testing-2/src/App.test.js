import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('should render without any error', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/count/i);
  expect(linkElement).toBeInTheDocument();
});



it("should have add and reduce buttons", ()=> {
  const { getAllByTestId } = render(<App/>)
  const [ add, reduce ] = getAllByTestId("button")
  expect(add).toHaveTextContent('ADD')
  expect(reduce).toHaveTextContent('REDUCE')
})

it("should have an element with counter value as default ( 0 )", () => {
  const { getByTestId } = render(<App/>)
  const counter = getByTestId("counter")
  expect(counter).toHaveTextContent('0')

})

it("on click of add, value of counter should increment by 5 and on click of reduce, value of counter should decrease by 5", () => {
  const { getByTestId, getAllByTestId } = render(<App/>)
  const [add, reduce] = getAllByTestId("button")
  const counter = getByTestId("counter")

  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(reduce)

  expect(counter).toHaveTextContent('5')

})
