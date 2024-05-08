import React from 'react';
import { render } from '@testing-library/react';
import Page from 'app/admin/page';
import { useRouter } from 'next/navigation';
import { useAuth } from 'app/context/AuthContext';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('app/context/AuthContext', () => ({
  useAuth: jest.fn()
}));

describe('Page Component', () => {
  let pushMock;

  beforeEach(() => {
    jest.clearAllMocks();
    pushMock = jest.fn();
    useRouter.mockImplementation(() => ({
      push: pushMock
    }));
    useAuth.mockImplementation(() => ({ user: null })); 
  });

  it('redirects to homepage if user is authenticated', () => {
    useAuth.mockImplementation(() => ({ user: { name: 'Test User' } })); 
    render(<Page />);
    expect(pushMock).toHaveBeenCalledWith('/pages/homepage');
  });

  it('redirects to login page if user is not authenticated', () => {
    render(<Page />);
    expect(pushMock).toHaveBeenCalledWith('/pages/login');
  });
});
