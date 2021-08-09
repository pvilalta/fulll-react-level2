import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '..';

describe('components | List | index', () => {
  it('should render component', () => {
    const items = [
      {
        login: 'frodon',
        id: 479213,
      },
      {
        login: 'sam',
        id: 479214,
      },
    ];

    const { container } = render(<Component items={items} />);
    const profileOne = screen.getByText('frodon');
    const profileTwo = screen.getByText('sam');

    expect(container).toMatchSnapshot();
    expect(profileOne).toBeInTheDocument();
    expect(profileTwo).toBeInTheDocument();
  });
});
