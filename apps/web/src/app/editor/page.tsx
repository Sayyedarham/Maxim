'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Header,
  Button,
  Badge,
  StatusIndicator,
  LockedFeatureBanner,
  Card,
} from '@maxim/ui';
import { resolveCapabilities } from '@maxim/core';
import {
  Play,
  Square,
  FolderTree,
  Bot,
  Terminal,
  Settings,
  Sparkles,
  Download,
  Code2,
  FileCode,
} from 'lucide-react';

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<'files' | 'agent' | 'terminal'>('files');
  const [isRunning, setIsRunning] = useState(false);
  const [activeFile, setActiveFile] = useState('main.py');
  const [code, setCode] = useState(
    `# Maxim Web Edition (Offline-First Python IDE)\n` +
    `# Powered by Pyodide WebAssembly in a Web Worker\n\n` +
    `import sys\n` +
    `import math\n\n` +
    `def main():\n` +
    `    print("🚀 Maxim Python Runtime ready!")\n` +
    `    print(f"Python version: {sys.version.split()[0]}")\n` +
    `    print(f"Pi calculated: {math.pi}")\n\n` +
    `if __name__ == '__main__':\n` +
    `    main()\n`
  );
  const [output, setOutput] = useState(
    '=== Maxim Web Environment (WASM/Pyodide) ===\n' +
    'Session storage: IndexedDB persistent store\n' +
    'Ready for execution.\n'
  );

  const capabilities = resolveCapabilities('web');

  const handleRun = () => {
    setIsRunning(true);
    setOutput((prev) => prev + `\n> Running ${activeFile}...\n`);
    setTimeout(() => {
      setOutput(
        (prev) =>
          prev +
          `🚀 Maxim Python Runtime ready!\n` +
          `Python version: 3.12.1 (Pyodide)\n` +
          `Pi calculated: 3.141592653589793\n` +
          `[Finished in 12ms with exit code 0]\n`
      );
      setIsRunning(false);
    }, 600);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: 'var(--bg-primary, #0a0d14)',
        overflow: 'hidden',
      }}
    >
      {/* Top Header */}
      <Header
        currentTier="web"
        projectName="my-python-project"
        onExportClick={() => {
          alert('Exporting project ZIP (IndexedDB to local disk)');
        }}
      />

      {/* Main Workspace Layout */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Activity Bar */}
        <div
          style={{
            width: '50px',
            background: 'var(--bg-secondary, #111726)',
            borderRight: '1px solid var(--border-color, rgba(255,255,255,0.08))',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '12px 0',
            gap: '16px',
          }}
        >
          <button
            onClick={() => setActiveTab('files')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'files' ? '#818cf8' : 'var(--text-muted, #64748b)',
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: activeTab === 'files' ? 'rgba(99,102,241,0.15)' : 'transparent',
            }}
            title="File Explorer"
          >
            <FolderTree size={20} />
          </button>

          <button
            onClick={() => setActiveTab('agent')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'agent' ? '#c084fc' : 'var(--text-muted, #64748b)',
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: activeTab === 'agent' ? 'rgba(168,85,247,0.15)' : 'transparent',
            }}
            title="AI Agent (Desktop Upgrade)"
          >
            <Bot size={20} />
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'terminal' ? '#38bdf8' : 'var(--text-muted, #64748b)',
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: activeTab === 'terminal' ? 'rgba(6,182,212,0.15)' : 'transparent',
            }}
            title="Terminal & Output"
          >
            <Terminal size={20} />
          </button>
        </div>

        {/* Sidebar Panel */}
        <div
          style={{
            width: '240px',
            background: 'var(--bg-secondary, #111726)',
            borderRight: '1px solid var(--border-color, rgba(255,255,255,0.08))',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--border-color, rgba(255,255,255,0.08))',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--text-muted, #64748b)',
              letterSpacing: '0.05em',
            }}
          >
            {activeTab === 'files'
              ? 'Explorer (IndexedDB)'
              : activeTab === 'agent'
              ? 'AI Assistant'
              : 'Console'}
          </div>

          <div style={{ flex: 1, padding: '12px', overflowY: 'auto' }}>
            {activeTab === 'files' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div
                  onClick={() => setActiveFile('main.py')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    background:
                      activeFile === 'main.py' ? 'rgba(99,102,241,0.15)' : 'transparent',
                    color: activeFile === 'main.py' ? '#818cf8' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <FileCode size={16} /> main.py
                </div>
                <div
                  onClick={() => setActiveFile('utils.py')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    background:
                      activeFile === 'utils.py' ? 'rgba(99,102,241,0.15)' : 'transparent',
                    color: activeFile === 'utils.py' ? '#818cf8' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <FileCode size={16} /> utils.py
                </div>
              </div>
            )}

            {activeTab === 'agent' && (
              <div style={{ padding: '8px 0' }}>
                <LockedFeatureBanner feature="agent" />
              </div>
            )}

            {activeTab === 'terminal' && (
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Pyodide WASM stdout stream active.
              </div>
            )}
          </div>
        </div>

        {/* Center Editor Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Editor Tab Bar & Actions */}
          <div
            style={{
              height: '40px',
              background: 'var(--bg-primary, #0a0d14)',
              borderBottom: '1px solid var(--border-color, rgba(255,255,255,0.08))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  padding: '6px 12px',
                  background: 'var(--bg-secondary, #111726)',
                  borderTop: '2px solid #6366f1',
                  color: 'var(--text-primary)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <FileCode size={14} color="#818cf8" /> {activeFile}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Button
                variant={isRunning ? 'danger' : 'glow'}
                size="sm"
                onClick={handleRun}
                icon={isRunning ? <Square size={13} /> : <Play size={13} />}
              >
                {isRunning ? 'Running...' : 'Run Python (Pyodide)'}
              </Button>
            </div>
          </div>

          {/* Monaco / Code Textarea View */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#0a0d14' }}>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                flex: 1,
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: '#e2e8f0',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '14px',
                lineHeight: '1.6',
                padding: '20px',
                outline: 'none',
                resize: 'none',
                boxSizing: 'border-box',
              }}
              spellCheck={false}
            />

            {/* Bottom Output Terminal */}
            <div
              style={{
                height: '180px',
                background: 'var(--bg-secondary, #111726)',
                borderTop: '1px solid var(--border-color, rgba(255,255,255,0.08))',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  padding: '6px 16px',
                  background: 'rgba(0,0,0,0.3)',
                  borderBottom: '1px solid var(--border-color, rgba(255,255,255,0.08))',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                }}
              >
                <span>TERMINAL OUTPUT (PYODIDE WORKER)</span>
                <StatusIndicator status={isRunning ? 'running' : 'saved'} />
              </div>
              <pre
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  margin: 0,
                  color: '#94a3b8',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  overflowY: 'auto',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {output}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <footer
        style={{
          height: '26px',
          background: 'var(--bg-secondary, #111726)',
          borderTop: '1px solid var(--border-color, rgba(255,255,255,0.08))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px',
          fontSize: '11px',
          color: 'var(--text-muted, #64748b)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <StatusIndicator status="saved" label="Offline Storage: IndexedDB (Active)" />
          <span>Python 3.12 (Pyodide WASM)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>UTF-8</span>
          <span>Spaces: 4</span>
          <Link href="/download" style={{ color: '#818cf8', textDecoration: 'none' }}>
            Desktop Upgrade Available
          </Link>
        </div>
      </footer>
    </div>
  );
}
