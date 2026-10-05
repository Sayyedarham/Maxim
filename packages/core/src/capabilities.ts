export type Tier = 'web' | 'desktop' | 'cloud';

export interface Capabilities {
  /** Can run AI Agent workflows (LangGraph planner/coder/tester) */
  agent: boolean;
  /** Can spawn Docker containers with sandbox resource/network isolation */
  docker: boolean;
  /** Supports local LLM engines (e.g. Ollama via local sidecar) */
  localModels: boolean;
  /** Direct access to host filesystem folders (vs browser OPFS / IndexedDB) */
  realFilesystem: boolean;
  /** Remote cloud job scheduling, cloud queues, and sync */
  cloud: boolean;
  /** Debug Adapter Protocol (debugpy) visual debugging */
  pythonDebugger: boolean;
  /** Tree-sitter code graph & call-graph indexing */
  codeGraph: boolean;
}

export interface UpgradeInfo {
  tierRequired: Tier;
  title: string;
  description: string;
  downloadUrl: string;
  badge: string;
}

export const DEFAULT_CAPABILITIES: Record<Tier, Capabilities> = {
  web: {
    agent: false,
    docker: false,
    localModels: false,
    realFilesystem: false,
    cloud: false,
    pythonDebugger: false,
    codeGraph: false,
  },
  desktop: {
    agent: true,
    docker: true,
    localModels: true,
    realFilesystem: true,
    cloud: false,
    pythonDebugger: true,
    codeGraph: true,
  },
  cloud: {
    agent: true,
    docker: true,
    localModels: false,
    realFilesystem: false,
    cloud: true,
    pythonDebugger: false,
    codeGraph: true,
  },
};

export function resolveCapabilities(tier: Tier, overrides?: Partial<Capabilities>): Capabilities {
  return {
    ...DEFAULT_CAPABILITIES[tier],
    ...(overrides || {}),
  };
}

export function getUpgradeInfo(feature: keyof Capabilities): UpgradeInfo {
  switch (feature) {
    case 'agent':
      return {
        tierRequired: 'desktop',
        title: 'Autonomous Coding Agent',
        description:
          'Get the full LangGraph-powered AI agent with plan-code-test-review loops by downloading the free Desktop app.',
        downloadUrl: '/download',
        badge: 'Desktop Feature',
      };
    case 'docker':
      return {
        tierRequired: 'desktop',
        title: 'Isolated Docker Sandbox',
        description:
          'Run full Python environments and system packages securely with Docker isolation on your desktop.',
        downloadUrl: '/download',
        badge: 'Desktop Feature',
      };
    case 'localModels':
      return {
        tierRequired: 'desktop',
        title: 'Local Models (Ollama)',
        description:
          'Connect local open-source LLMs without API costs or cloud limits via our Desktop sidecar.',
        downloadUrl: '/download',
        badge: 'Desktop Feature',
      };
    case 'realFilesystem':
      return {
        tierRequired: 'desktop',
        title: 'Local Folder Sync',
        description: 'Directly open, edit, and watch real directory trees on your PC.',
        downloadUrl: '/download',
        badge: 'Desktop Feature',
      };
    case 'pythonDebugger':
      return {
        tierRequired: 'desktop',
        title: 'Visual Python Debugger',
        description: 'Interactive step debugging, breakpoints, and DAP stack traces on Desktop.',
        downloadUrl: '/download',
        badge: 'Desktop Feature',
      };
    case 'codeGraph':
      return {
        tierRequired: 'desktop',
        title: 'Tree-sitter Code Graph',
        description: 'Explore function call graphs, dependencies, and impact analysis.',
        downloadUrl: '/download',
        badge: 'Desktop Feature',
      };
    case 'cloud':
      return {
        tierRequired: 'cloud',
        title: 'Cloud Workspaces & Sync',
        description: 'Sync your event log and offload heavy background agent tasks to Cloud workers.',
        downloadUrl: '/cloud',
        badge: 'Cloud Feature',
      };
    default:
      return {
        tierRequired: 'desktop',
        title: 'Upgrade Required',
        description: 'This feature is available in the Desktop or Cloud editions.',
        downloadUrl: '/download',
        badge: 'Upgrade',
      };
  }
}
