import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  style,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 500,
    cursor: 'pointer',
    borderRadius: 'var(--radius-md, 8px)',
    transition: 'all 0.15s ease-in-out',
    border: 'none',
    fontFamily: 'var(--font-sans, inherit)',
    outline: 'none',
    textDecoration: 'none',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '6px 12px', fontSize: '13px' },
    md: { padding: '9px 16px', fontSize: '14px' },
    lg: { padding: '12px 24px', fontSize: '16px', fontWeight: 600 },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
    },
    glow: {
      background: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #a855f7 100%)',
      color: '#ffffff',
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.45)',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.08)',
      color: 'var(--text-primary, #f8fafc)',
      border: '1px solid var(--border-color, rgba(255, 255, 255, 0.12))',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary, #94a3b8)',
    },
    danger: {
      background: 'rgba(244, 63, 94, 0.15)',
      color: '#fb7185',
      border: '1px solid rgba(244, 63, 94, 0.3)',
    },
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      className={`maxim-btn ${className}`}
      {...props}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </button>
  );
};
