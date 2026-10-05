export interface EditorCursorPosition {
  line: number;
  column: number;
}

export interface SessionState {
  projectId: string;
  projectName: string;
  openTabs: string[];
  activeTabPath: string | null;
  cursorPositions: Record<string, EditorCursorPosition>;
  terminalOutput: string;
  sidebarOpen: boolean;
  activePanel: 'files' | 'agent' | 'terminal' | 'settings';
  lastSavedAt: number;
  schemaVersion: number;
}

export const INITIAL_SESSION_STATE: SessionState = {
  projectId: 'default_project',
  projectName: 'Maxim Python Workspace',
  openTabs: ['main.py'],
  activeTabPath: 'main.py',
  cursorPositions: {
    'main.py': { line: 1, column: 1 },
  },
  terminalOutput: '=== Maxim Python Environment Initialized ===\nReady.\n',
  sidebarOpen: true,
  activePanel: 'files',
  lastSavedAt: Date.now(),
  schemaVersion: 1,
};
