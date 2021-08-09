import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from '..';

describe('components | ErrorHandler | index', () => {
  it('should render component', () => {
    const message = 'random message';

    const { container } = render(<Component message={message} />);
    const spanMessage = screen.getByTestId('errorMessage').textContent;

    expect(container).toMatchSnapshot();
    expect(spanMessage).toBe('random message');
  });
});
