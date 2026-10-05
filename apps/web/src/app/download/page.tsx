'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Download,
  ArrowLeft,
  Bot,
  Shield,
  Cpu,
  FolderSync,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { Button, Badge, Card } from '@maxim/ui';

export default function DownloadPage() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 40px',
          borderBottom: '1px solid var(--border-color)',
          background: 'rgba(10, 13, 20, 0.7)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
              padding: '7px',
              borderRadius: '10px',
              display: 'flex',
            }}
          >
            <Code2 size={22} color="#ffffff" />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800 }}>
            <span className="maxim-gradient-text">Maxim</span>
          </span>
        </Link>

        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button variant="ghost" size="sm" icon={<ArrowLeft size={14} />}>
            Back to Home
          </Button>
        </Link>
      </nav>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Badge variant="purple">Desktop Upgrade</Badge>
          <h1 style={{ fontSize: '42px', fontWeight: 800, marginTop: '12px', marginBottom: '16px' }}>
            Download Maxim for Desktop
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', maxWidth: '600px', margin: '0 auto' }}>
            Unlock autonomous coding agents, isolated Docker sandboxes, local Ollama models, and native filesystem access.
          </p>
        </div>

        {/* Download Platforms */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          <Card glow>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Terminal size={28} color="#818cf8" />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Windows (x64 / ARM64)</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Installer (.msi / .exe)</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Requires Windows 10/11 with Docker Desktop & Python 3.10+ (optional: Ollama).
            </p>
            <Button variant="glow" style={{ width: '100%' }} icon={<Download size={16} />}>
              Download for Windows
            </Button>
          </Card>

          <Card glow>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Cpu size={28} color="#38bdf8" />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>macOS (Apple Silicon & Intel)</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Universal (.dmg)</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Optimized for M1/M2/M3/M4 Apple Silicon with native Ollama acceleration.
            </p>
            <Button variant="glow" style={{ width: '100%' }} icon={<Download size={16} />}>
              Download for macOS
            </Button>
          </Card>

          <Card glow>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Shield size={28} color="#34d399" />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Linux (.deb / AppImage)</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>x86_64 / aarch64</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Compatible with Ubuntu, Debian, Fedora, and Arch with native Docker daemon.
            </p>
            <Button variant="glow" style={{ width: '100%' }} icon={<Download size={16} />}>
              Download for Linux
            </Button>
          </Card>
        </div>

        {/* Feature Grid */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>
            What you get on Desktop
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#c084fc', marginBottom: '6px' }}>
                <Bot size={18} /> LangGraph Agent Loop
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Planner, Coder, Test Runner, and Reviewer with interactive diff approvals.
              </p>
            </div>

            <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#38bdf8', marginBottom: '6px' }}>
                <Shield size={18} /> Docker Sandbox
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Safe container execution with CPU/memory limits and disabled networking by default.
              </p>
            </div>

            <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#34d399', marginBottom: '6px' }}>
                <Cpu size={18} /> Local Ollama LLMs
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Run Qwen, Llama 3, or DeepSeek locally with zero API latency and total privacy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
