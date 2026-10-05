export const CURRENT_EVENT_LOG_SCHEMA_VERSION = 1;

export type EventLogType =
  | 'file:edit'
  | 'run:execution'
  | 'agent:step'
  | 'approval:decision'
  | 'session:update';

export interface BaseEventLogEntry<TType extends EventLogType, TPayload> {
  id: string;
  schemaVersion: number;
  projectId: string;
  sessionId: string;
  timestamp: number;
  sequenceNumber: number;
  type: TType;
  payload: TPayload;
  metadata?: Record<string, unknown>;
}

export interface FileEditPayload {
  path: string;
  beforeHash?: string;
  afterHash: string;
  patch?: string;
  isSnapshot?: boolean;
  content?: string;
}

export interface RunExecutionPayload {
  executionId: string;
  runnerType: 'pyodide' | 'docker' | 'cloud';
  entrypoint?: string;
  status: 'started' | 'completed' | 'failed' | 'terminated';
  exitCode?: number;
  durationMs?: number;
  error?: string;
}

export interface AgentStepPayload {
  taskId: string;
  stepNumber: number;
  role: 'planner' | 'coder' | 'tester' | 'reviewer';
  action: string;
  thought?: string;
  tool?: string;
  toolArgs?: Record<string, unknown>;
  diffProposalId?: string;
}

export interface ApprovalDecisionPayload {
  taskId: string;
  diffProposalId: string;
  decision: 'accepted' | 'rejected' | 'modified';
  feedback?: string;
  modifiedPatch?: string;
}

export interface SessionUpdatePayload {
  activeTabs: string[];
  activeTab?: string;
  cursorPositions?: Record<string, { line: number; column: number }>;
  layout?: Record<string, unknown>;
}

export type FileEditEvent = BaseEventLogEntry<'file:edit', FileEditPayload>;
export type RunExecutionEvent = BaseEventLogEntry<'run:execution', RunExecutionPayload>;
export type AgentStepEvent = BaseEventLogEntry<'agent:step', AgentStepPayload>;
export type ApprovalDecisionEvent = BaseEventLogEntry<'approval:decision', ApprovalDecisionPayload>;
export type SessionUpdateEvent = BaseEventLogEntry<'session:update', SessionUpdatePayload>;

export type EventLogEntry =
  | FileEditEvent
  | RunExecutionEvent
  | AgentStepEvent
  | ApprovalDecisionEvent
  | SessionUpdateEvent;

/**
 * Creates an event entry with automatic ID, timestamp, and current schema version
 */
export function createEventEntry<T extends EventLogEntry>(
  type: T['type'],
  payload: T['payload'],
  options: {
    projectId: string;
    sessionId: string;
    sequenceNumber: number;
    metadata?: Record<string, unknown>;
  }
): T {
  return {
    id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    schemaVersion: CURRENT_EVENT_LOG_SCHEMA_VERSION,
    projectId: options.projectId,
    sessionId: options.sessionId,
    timestamp: Date.now(),
    sequenceNumber: options.sequenceNumber,
    type,
    payload,
    metadata: options.metadata,
  } as unknown as T;
}

/**
 * Validates whether a raw object conforms to an EventLogEntry schema
 */
export function validateEventEntry(raw: unknown): raw is EventLogEntry {
  if (!raw || typeof raw !== 'object') return false;
  const entry = raw as Partial<EventLogEntry>;
  return (
    typeof entry.id === 'string' &&
    typeof entry.schemaVersion === 'number' &&
    typeof entry.projectId === 'string' &&
    typeof entry.sessionId === 'string' &&
    typeof entry.timestamp === 'number' &&
    typeof entry.sequenceNumber === 'number' &&
    typeof entry.type === 'string' &&
    entry.payload !== undefined
  );
}
