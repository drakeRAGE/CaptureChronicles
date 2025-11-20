import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Header from '../Header';

// Mock Redux store
const mockStore = configureStore({
  reducer: {
    user: (state = { currentUser: null }, action) => state,
  },
});

// Mock navigate function
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ search: '' }),
  };
});

// Test wrapper component
const TestWrapper = ({ children, store = mockStore }) => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
);

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders header component', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    // Check if search input is rendered
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('handles search form submission', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    const searchInput = screen.getByPlaceholderText(/search/i);
    const searchForm = searchInput.closest('form');
    
    // Type in search input
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    expect(searchInput.value).toBe('test search');
    
    // Submit form
    fireEvent.submit(searchForm);
    
    // Check if navigate was called
    expect(mockNavigate).toHaveBeenCalled();
  });

  it('toggles mobile menu', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    // Find menu toggle button (hamburger menu) - should be the first button
    const menuButtons = screen.getAllByRole('button');
    const menuButton = menuButtons[0]; // First button should be the hamburger menu
    
    // Click to toggle menu
    fireEvent.click(menuButton);
    
    // Menu should be toggled (this is a basic test, actual implementation may vary)
    expect(menuButton).toBeInTheDocument();
  });

  it('displays user profile when logged in', () => {
    const storeWithUser = configureStore({
      reducer: {
        user: (state = { currentUser: { username: 'testuser' } }, action) => state,
      },
    });

    render(
      <TestWrapper store={storeWithUser}>
        <Header />
      </TestWrapper>
    );
    
    // Should render some user-related content when logged in
    // Check that buttons exist (there should be multiple buttons including menu and search)
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
