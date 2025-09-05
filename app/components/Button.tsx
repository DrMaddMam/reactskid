import React from 'react';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset'; // HTML button types
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'; // Bootstrap variants
  size?: 'sm' | 'lg'; // Optional sizes (small or large)
  onClick?: () => void; // Optional click handler
  disabled?: boolean; // Optional disabled state
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  variant = 'primary',
  size,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${size ? `btn-${size}` : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;