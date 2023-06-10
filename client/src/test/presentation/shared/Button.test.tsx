import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from 'presentation/components/Button/Button'; 
import { MemoryRouter } from 'react-router-dom';

describe('Button', () => {
  const defaultProps: ButtonProps = {
    onClick: jest.fn(),
    children: 'Test Button',
  };

  it('renders button with correct text', () => {
    const { getByText } = render(<Button {...defaultProps} />, { wrapper: MemoryRouter });
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('handles onClick event', () => {
    const { getByText } = render(<Button {...defaultProps} />, { wrapper: MemoryRouter });
    fireEvent.click(getByText('Test Button'));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('renders as a button when href is not provided', () => {
    const { getByText } = render(<Button {...defaultProps} />, { wrapper: MemoryRouter });
    expect(getByText('Test Button').closest('button')).toBeInTheDocument();
  });
});
