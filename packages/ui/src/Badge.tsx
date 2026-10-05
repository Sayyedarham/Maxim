import React from 'react';

export interface BadgeProps {
  variant?: 'cyan' | 'indigo' | 'purple' | 'emerald' | 'amber' | 'rose' | 'neutral';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'indigo', children, icon }) => {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    cyan: {
      bg: 'rgba(6, 182, 212, 0.12)',
      text: '#38bdf8',
      border: 'rgba(6, 182, 212, 0.25)',
    },
    indigo: {
      bg: 'rgba(99, 102, 241, 0.12)',
      text: '#818cf8',
      border: 'rgba(99, 102, 241, 0.25)',
    },
    purple: {
      bg: 'rgba(168, 85, 247, 0.12)',
      text: '#c084fc',
      border: 'rgba(168, 85, 247, 0.25)',
    },
    emerald: {
      bg: 'rgba(16, 185, 129, 0.12)',
      text: '#34d399',
      border: 'rgba(16, 185, 129, 0.25)',
    },
    amber: {
      bg: 'rgba(245, 158, 11, 0.12)',
      text: '#fbbf24',
      border: 'rgba(245, 158, 11, 0.25)',
    },
    rose: {
      bg: 'rgba(244, 63, 94, 0.12)',
      text: '#fb7185',
      border: 'rgba(244, 63, 94, 0.25)',
    },
    neutral: {
      bg: 'rgba(255, 255, 255, 0.06)',
      text: '#94a3b8',
      border: 'rgba(255, 255, 255, 0.1)',
    },
  };

  const style = colorMap[variant] || colorMap.indigo;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '3px 9px',
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        borderRadius: '9999px',
        background: style.bg,
        color: style.text,
        border: `1px solid ${style.border}`,
      }}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  );
};
