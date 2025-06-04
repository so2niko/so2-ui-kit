import React from 'react';

import './index.css';

export interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'secondary' | 'success' | 'error';
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'text',
  size = 'medium',
  color = 'default',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${variant}`, `button--${color}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
