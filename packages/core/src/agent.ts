export type AgentRole = 'planner' | 'coder' | 'tester' | 'reviewer';

export interface AgentStep {
  id: string;
  stepNumber: number;
  role: AgentRole;
  thought: string;
  action: string;
  tool?: string;
  toolArgs?: Record<string, unknown>;
  toolResult?: unknown;
  timestamp: number;
  diffProposalId?: string;
}

export interface DiffProposal {
  id: string;
  taskId: string;
  filePath: string;
  originalContent: string;
  proposedContent: string;
  patch: string;
  summary: string;
  status: 'pending' | 'accepted' | 'rejected' | 'modified';
}

export interface AgentTaskRequest {
  id?: string;
  prompt: string;
  contextFiles?: string[];
  activeFilePath?: string;
  modelConfig?: {
    provider: 'ollama' | 'openai' | 'anthropic' | 'gemini';
    modelName: string;
    apiKey?: string;
    baseUrl?: string;
  };
}

export type AgentStepListener = (step: AgentStep) => void;
export type DiffProposalListener = (diff: DiffProposal) => void;

/**
 * Universal AgentClient interface:
 * 1. Absent / Stubbed on Web tier
 * 2. Local Python sidecar (FastAPI + WebSocket) on Desktop tier
 * 3. Go Gateway / Cloud Worker on Cloud tier
 */
export interface AgentClient {
  startTask(request: AgentTaskRequest): Promise<string>;
  cancelTask(taskId: string): Promise<void>;
  approveDiff(proposalId: string): Promise<void>;
  rejectDiff(proposalId: string, feedback?: string): Promise<void>;
  onStep(taskId: string, listener: AgentStepListener): () => void;
  onDiffProposal(taskId: string, listener: DiffProposalListener): () => void;
  onComplete(taskId: string, listener: (summary: string) => void): () => void;
  onError(taskId: string, listener: (error: Error) => void): () => void;
}
