export type RunnerStatus = 'idle' | 'initializing' | 'running' | 'completed' | 'failed' | 'terminated';

export interface RunOptions {
  entrypoint?: string;
  files?: Record<string, string>;
  args?: string[];
  env?: Record<string, string>;
  timeoutMs?: number;
}

export interface RunResult {
  exitCode: number;
  durationMs: number;
  stdout: string;
  stderr: string;
  error?: string;
}

export type OutputListener = (chunk: string) => void;

/**
 * Universal Runner interface supporting:
 * 1. Pyodide WebWorker (Web tier)
 * 2. Docker container sandbox (Desktop tier)
 * 3. Remote Cloud Job runner (Cloud tier)
 */
export interface Runner {
  readonly id: string;
  readonly name: string;
  getStatus(): RunnerStatus;
  run(code: string, options?: RunOptions): Promise<RunResult>;
  terminate(): Promise<void>;
  onStdout(listener: OutputListener): () => void;
  onStderr(listener: OutputListener): () => void;
  onStatusChange?(listener: (status: RunnerStatus) => void): () => void;
}
