import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Component from '..';

describe('components | SearchBar | index', () => {
  const setData = jest.fn();
  const data = {};

  it('should render component', () => {
    const { container } = render(<Component data={data} setData={setData} />);
    const searchBar = screen.getByTestId('searchBar');

    expect(container).toMatchSnapshot();
    expect(searchBar).toBeInTheDocument();
  });

  it('should write into the input', () => {
    render(<Component data={data} setData={setData} />);
    const searchBar = screen.getByTestId('searchBar');

    userEvent.type(searchBar, 'frodon');
    expect(searchBar.value).toBe('frodon');
  });
});
