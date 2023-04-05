import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './index';

//
// const TestContainer = () => {
//   return (
//     <>
//       <button data-testid="button" type="submit" disabled>submit</button>
//       <fieldset disabled><input type="text" data-testid="input" /></fieldset>
//       <a href="https://www,baidu.com" >link</a>
//     </>
//   )
// }

test('test button', () => {
  const wrapper = render(<Button>Nice</Button>);
  const element = wrapper.queryByText('Nice');
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument()
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});