import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./processFile.worker.js');

describe('<App /> spec', () => {
  it('renders the component', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
