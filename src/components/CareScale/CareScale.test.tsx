import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CareScale from './CareScale';

describe('<CareScale />', () => {
  test('it should mount', () => {
    render(<CareScale />);
    
    const careScale = screen.getByTestId('CareScale');

    expect(careScale).toBeInTheDocument();
  });
});