import React from 'react';
import { Capabilities, getUpgradeInfo } from '@maxim/core';
import { Button } from './Button.js';
import { Badge } from './Badge.js';
import { Lock, Sparkles, ArrowRight } from 'lucide-react';

export interface LockedFeatureBannerProps {
  feature: keyof Capabilities;
  onUpgradeClick?: () => void;
}

export const LockedFeatureBanner: React.FC<LockedFeatureBannerProps> = ({
  feature,
  onUpgradeClick,
}) => {
  const info = getUpgradeInfo(feature);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        borderRadius: 'var(--radius-lg, 16px)',
        background: 'rgba(17, 23, 38, 0.7)',
        border: '1px dashed rgba(99, 102, 241, 0.3)',
        backdropFilter: 'blur(10px)',
        margin: '16px',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(99, 102, 241, 0.15)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#818cf8',
          marginBottom: '16px',
        }}
      >
        <Lock size={26} />
      </div>

      <Badge variant="purple" icon={<Sparkles size={12} />}>
        {info.badge}
      </Badge>

      <h3
        style={{
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--text-primary, #f8fafc)',
          marginTop: '12px',
          marginBottom: '8px',
        }}
      >
        {info.title}
      </h3>

      <p
        style={{
          fontSize: '13px',
          lineHeight: '1.6',
          color: 'var(--text-secondary, #94a3b8)',
          maxWidth: '420px',
          marginBottom: '24px',
        }}
      >
        {info.description}
      </p>

      {onUpgradeClick ? (
        <Button variant="glow" size="md" onClick={onUpgradeClick} icon={<ArrowRight size={16} />}>
          Download Desktop App (Free)
        </Button>
      ) : (
        <a href={info.downloadUrl} style={{ textDecoration: 'none' }}>
          <Button variant="glow" size="md" icon={<ArrowRight size={16} />}>
            Download Desktop App (Free)
          </Button>
        </a>
      )}
    </div>
  );
};
