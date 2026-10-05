import React from 'react';
import { Tier } from '@maxim/core';
import { Badge } from './Badge.js';
import { Button } from './Button.js';
import { Code2, Download, Cloud, ExternalLink } from 'lucide-react';

export interface HeaderProps {
  currentTier?: Tier;
  projectName?: string;
  onDownloadClick?: () => void;
  onExportClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTier = 'web',
  projectName = 'Maxim Editor',
  onDownloadClick,
  onExportClick,
}) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        background: 'var(--bg-secondary, #111726)',
        borderBottom: '1px solid var(--border-color, rgba(255, 255, 255, 0.08))',
        height: '52px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 700,
            fontSize: '16px',
            color: '#ffffff',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Code2 size={18} color="#ffffff" />
          </div>
          <span className="maxim-gradient-text">Maxim</span>
        </div>

        <Badge variant={currentTier === 'desktop' ? 'emerald' : currentTier === 'cloud' ? 'cyan' : 'purple'}>
          {currentTier.toUpperCase()} EDITION
        </Badge>

        <span style={{ color: 'var(--border-color, rgba(255, 255, 255, 0.15))' }}>|</span>

        <span style={{ fontSize: '13px', color: 'var(--text-secondary, #94a3b8)', fontWeight: 500 }}>
          {projectName}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {onExportClick && (
          <Button variant="ghost" size="sm" onClick={onExportClick} icon={<ExternalLink size={14} />}>
            Export ZIP
          </Button>
        )}
        {currentTier === 'web' && (
          <a href="/download" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm" icon={<Download size={14} />}>
              Get Desktop (Agent + Docker)
            </Button>
          </a>
        )}
      </div>
    </header>
  );
};
