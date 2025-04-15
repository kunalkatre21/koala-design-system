import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { NavigationBarItem } from '../NavigationBar/NavigationBarItem';

describe('NavigationBar Integration', () => {
  it('renders items and handles selection', () => {
    function TestNavBar() {
      const [selected, setSelected] = React.useState('home');
      return (
        <NavigationBar>
          <NavigationBarItem
            icon={<span data-testid="icon-home">🏠</span>}
            label="Home"
            selected={selected === 'home'}
            onClick={() => setSelected('home')}
            aria-label="Home"
          />
          <NavigationBarItem
            icon={<span data-testid="icon-search">🔍</span>}
            label="Search"
            selected={selected === 'search'}
            onClick={() => setSelected('search')}
            aria-label="Search"
          />
          <NavigationBarItem
            icon={<span data-testid="icon-profile">👤</span>}
            label="Profile"
            selected={selected === 'profile'}
            onClick={() => setSelected('profile')}
            aria-label="Profile"
          />
        </NavigationBar>
      );
    }
    render(<TestNavBar />);
    // Home is selected by default
    expect(screen.getByLabelText('Home')).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByLabelText('Search')).toHaveAttribute('aria-selected', 'false');
    // Click Search
    fireEvent.click(screen.getByLabelText('Search'));
    expect(screen.getByLabelText('Search')).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByLabelText('Home')).toHaveAttribute('aria-selected', 'false');
    // Click Profile
    fireEvent.click(screen.getByLabelText('Profile'));
    expect(screen.getByLabelText('Profile')).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByLabelText('Search')).toHaveAttribute('aria-selected', 'false');
  });
});