import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlantItem from './PlantItem';

describe('<PlantItem />', () => {
  test('it should mount', () => {
    render(<PlantItem />);
    
    const plantItem = screen.getByTestId('PlantItem');

    expect(plantItem).toBeInTheDocument();
  });
});