import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ glow, children, className = '', style, ...props }) => {
  return (
    <div
      style={{
        background: 'var(--bg-surface, rgba(22, 30, 49, 0.75))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: 'var(--radius-lg, 16px)',
        border: '1px solid var(--border-color, rgba(255, 255, 255, 0.08))',
        boxShadow: glow
          ? '0 0 30px rgba(99, 102, 241, 0.18), 0 8px 30px rgba(0, 0, 0, 0.4)'
          : 'var(--shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35))',
        padding: '24px',
        transition: 'all 0.2s ease',
        ...style,
      }}
      className={`maxim-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
