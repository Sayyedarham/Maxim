export interface FileNode {
  path: string;
  name: string;
  kind: 'file' | 'directory';
  size?: number;
  updatedAt?: number;
  children?: FileNode[];
}

export interface FileStat {
  kind: 'file' | 'directory';
  size: number;
  createdAt: number;
  updatedAt: number;
}

export type FileSystemWatcher = (event: {
  type: 'created' | 'modified' | 'deleted';
  path: string;
}) => void;

/**
 * Universal FileSystem abstraction matching:
 * 1. Browser OPFS / IndexedDB (Web tier)
 * 2. Host native filesystem (Tauri Desktop tier)
 * 3. Ephemeral container filesystem (Cloud runner tier)
 */
export interface FileSystem {
  readFile(path: string): Promise<string>;
  writeFile(path: string, content: string): Promise<void>;
  readBinary?(path: string): Promise<Uint8Array>;
  writeBinary?(path: string, content: Uint8Array): Promise<void>;
  deleteFile(path: string): Promise<void>;
  createDirectory(path: string): Promise<void>;
  deleteDirectory(path: string, recursive?: boolean): Promise<void>;
  readDirectory(path: string): Promise<FileNode[]>;
  exists(path: string): Promise<boolean>;
  stat(path: string): Promise<FileStat | null>;
  watch?(path: string, listener: FileSystemWatcher): () => void;
  exportZip(): Promise<Blob>;
  importZip(zipData: Blob | ArrayBuffer): Promise<void>;
  getStorageEstimate?(): Promise<{ usage: number; quota: number }>;
}
