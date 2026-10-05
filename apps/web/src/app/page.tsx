'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Cpu,
  ShieldCheck,
  Zap,
  Terminal,
  Bot,
  Database,
  ArrowRight,
  Download,
  CheckCircle2,
  Layers,
  Sparkles,
  Lock,
} from 'lucide-react';
import { Button, Badge, Card } from '@maxim/ui';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Background Decorative Glows */}
      <div
        className="gradient-glow"
        style={{
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, #6366f1 0%, #06b6d4 100%)',
        }}
      />
      <div
        className="gradient-glow"
        style={{
          top: '600px',
          right: '-100px',
          background: 'radial-gradient(circle, #a855f7 0%, #6366f1 100%)',
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 40px',
          borderBottom: '1px solid var(--border-color)',
          background: 'rgba(10, 13, 20, 0.7)',
          backdropFilter: 'blur(16px)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
              padding: '7px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)',
            }}
          >
            <Code2 size={22} color="#ffffff" />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em' }}>
            <span className="maxim-gradient-text">Maxim</span>
          </span>
          <Badge variant="cyan">v0.1</Badge>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a
            href="#tiers"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Tiers & Architecture
          </a>
          <a
            href="#features"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Features
          </a>
          <Link href="/download" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm" icon={<Download size={14} />}>
              Desktop App
            </Button>
          </Link>
          <Link href="/editor" style={{ textDecoration: 'none' }}>
            <Button variant="glow" size="sm" icon={<Zap size={14} />}>
              Launch Web Editor
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px 60px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ display: 'inline-block', marginBottom: '20px' }}>
          <Badge variant="purple" icon={<Sparkles size={13} />}>
            Three Tiers • One Shared Codebase
          </Badge>
        </div>

        <h1
          style={{
            fontSize: '56px',
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            maxWidth: '900px',
            margin: '0 auto 24px',
          }}
        >
          Offline-First Python IDE & <br />
          <span className="maxim-gradient-text">Autonomous AI Agent</span>
        </h1>

        <p
          style={{
            fontSize: '19px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            margin: '0 auto 40px',
          }}
        >
          Code instantly in the browser with Pyodide & IndexedDB. Upgrade to the free Desktop app
          for LangGraph agent loops, Docker sandboxing, and local Ollama models.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '60px' }}>
          <Link href="/editor" style={{ textDecoration: 'none' }}>
            <Button variant="glow" size="lg" icon={<ArrowRight size={18} />}>
              Open Web IDE in Browser
            </Button>
          </Link>
          <Link href="/download" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="lg" icon={<Download size={18} />}>
              Download Desktop (Tauri)
            </Button>
          </Link>
        </div>

        {/* Product Visual Mockup */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(99, 102, 241, 0.15)',
            overflow: 'hidden',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              padding: '12px 18px',
              borderBottom: '1px solid var(--border-color)',
              background: 'rgba(17, 23, 38, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f43f5e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              maxim://workspace/main.py — Pyodide WASM Runtime
            </span>
            <Badge variant="emerald">Pyodide Ready</Badge>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 280px', minHeight: '360px' }}>
            {/* Sidebar */}
            <div style={{ borderRight: '1px solid var(--border-color)', padding: '16px', background: 'var(--bg-primary)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '12px' }}>
                Explorer
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
                <div style={{ padding: '6px 10px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '6px', color: '#818cf8' }}>
                  📄 main.py
                </div>
                <div style={{ padding: '6px 10px', color: 'var(--text-secondary)' }}>📄 test_suite.py</div>
                <div style={{ padding: '6px 10px', color: 'var(--text-secondary)' }}>📁 utils/</div>
              </div>
            </div>

            {/* Code */}
            <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '1.7', background: '#0a0d14' }}>
              <span style={{ color: '#c084fc' }}>import</span> asyncio<br />
              <span style={{ color: '#c084fc' }}>import</span> sys<br /><br />
              <span style={{ color: '#60a5fa' }}>async def</span> <span style={{ color: '#34d399' }}>compute_fibonacci</span>(n: int) -&gt; int:<br />
              &nbsp;&nbsp;<span style={{ color: '#94a3b8' }}>"""Offline-first Python execution in Web Worker"""</span><br />
              &nbsp;&nbsp;a, b = 0, 1<br />
              &nbsp;&nbsp;<span style={{ color: '#60a5fa' }}>for</span> _ <span style={{ color: '#60a5fa' }}>in</span> range(n):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a + b<br />
              &nbsp;&nbsp;<span style={{ color: '#60a5fa' }}>return</span> a<br /><br />
              print(f<span style={{ color: '#fbbf24' }}>"Fibonacci(30) = &#123;await compute_fibonacci(30)&#125;"</span>)
            </div>

            {/* Agent / Runner preview */}
            <div style={{ borderLeft: '1px solid var(--border-color)', padding: '16px', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                  <Bot size={16} color="#818cf8" />
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>Autonomous Agent</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '10px' }}>
                  💡 Propose refactoring & unit tests for fibonacci generator.
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                <Link href="/download" style={{ textDecoration: 'none' }}>
                  <Button variant="glow" size="sm" style={{ width: '100%' }} icon={<Download size={13} />}>
                    Unlock Agent (Desktop)
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Comparison Section */}
      <section id="tiers" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Badge variant="cyan">Three Tiers</Badge>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginTop: '12px' }}>
            Choose how you run Maxim
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
            A single unified TypeScript core orchestrating browsers, native PC desktops, and cloud clusters.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Tier 1: Web */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <Badge variant="cyan">Web Edition</Badge>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#34d399' }}>$0</span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Browser Offline</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', minHeight: '42px' }}>
              Instant zero-install web editor running Pyodide in Web Workers with IndexedDB persistence.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#34d399" /> Offline-first with Service Workers
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#34d399" /> Pyodide Python 3.12 Web Worker
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#34d399" /> IndexedDB / OPFS auto-save
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                <Lock size={15} /> No AI Agent / No Docker
              </li>
            </ul>
            <Link href="/editor" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" style={{ width: '100%' }}>Launch in Browser</Button>
            </Link>
          </Card>

          {/* Tier 2: Desktop */}
          <Card glow>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <Badge variant="purple">Desktop (Upgrade)</Badge>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#34d399' }}>Free</span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Tauri + AI Agent</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', minHeight: '42px' }}>
              Full LangGraph agent, isolated Docker containers, native files, and local Ollama models.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#c084fc" /> Autonomous LangGraph Coding Agent
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#c084fc" /> Isolated Docker Runner Sandbox
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#c084fc" /> Local LLMs (Ollama) & BYOK
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#c084fc" /> Real PC Filesystem Directory Sync
              </li>
            </ul>
            <Link href="/download" style={{ textDecoration: 'none' }}>
              <Button variant="glow" style={{ width: '100%' }} icon={<Download size={15} />}>
                Download Free Desktop
              </Button>
            </Link>
          </Card>

          {/* Tier 3: Cloud */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <Badge variant="indigo">Cloud Backend</Badge>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#34d399' }}>Free Tier</span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Oracle Free VM</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', minHeight: '42px' }}>
              Go gateway, Postgres SKIP LOCKED queue, remote Python workers, and telemetry.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#818cf8" /> Go Gateway + GitHub OAuth
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#818cf8" /> Postgres-backed Job Queue
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#818cf8" /> SSE Realtime Event Streaming
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#818cf8" /> Prometheus + Grafana Observability
              </li>
            </ul>
            <Button variant="secondary" style={{ width: '100%' }} disabled>
              Phase 4 Roadmap
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-color)',
          padding: '40px 24px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '13px',
          background: 'var(--bg-secondary)',
        }}
      >
        <p>Maxim — Built for offline reliability, developer privacy, and autonomous agent loops.</p>
        <p style={{ marginTop: '8px' }}>Phase 0 Foundations • Open Source monorepo (pnpm + Turborepo)</p>
      </footer>
    </div>
  );
}
