import React from 'react';

export interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'saved' | 'saving' | 'running' | 'error';
  label?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, label }) => {
  const statusConfig: Record<string, { color: string; text: string; pulse?: boolean }> = {
    online: { color: '#10b981', text: 'Online' },
    offline: { color: '#f59e0b', text: 'Offline (IndexedDB)' },
    saved: { color: '#06b6d4', text: 'Saved Locally' },
    saving: { color: '#818cf8', text: 'Saving...', pulse: true },
    running: { color: '#a855f7', text: 'Executing...', pulse: true },
    error: { color: '#f43f5e', text: 'Error' },
  };

  const current = statusConfig[status] || statusConfig.online;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '12px',
        color: 'var(--text-secondary, #94a3b8)',
      }}
    >
      <span
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: current.color,
          boxShadow: `0 0 8px ${current.color}`,
          display: 'inline-block',
        }}
      />
      <span>{label || current.text}</span>
    </div>
  );
};
