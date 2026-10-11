#!/usr/bin/env node
/**
 * SafarNama Unified Development Runner
 * Concurrently starts both the Node.js Express Backend and the Vite React Frontend.
 * Compatible with Windows, macOS, and Linux without extra dependencies.
 */

import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

// ANSI terminal color codes
const CYAN = '\x1b[36m';
const MAGENTA = '\x1b[35m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

console.log(`
${GREEN}${BOLD}=============================================================================
🏔️  SAFARNAMA NER INTELLIGENCE PLATFORM - UNIFIED DEV RUNNER
=============================================================================${RESET}
  Starting both backend and frontend concurrently...
  - Backend API & WebSockets : ${CYAN}http://localhost:5000${RESET}
  - Frontend React Dashboard : ${MAGENTA}http://localhost:5173${RESET}
${GREEN}=============================================================================${RESET}
`);

const isWindows = process.platform === 'win32';

// 1. Spawn Backend Process
const backendScript = path.resolve(process.cwd(), 'backend', 'server.js');
const backendProcess = spawn(process.execPath, [backendScript], {
  cwd: process.cwd(),
  env: { ...process.env, PORT: '5000' },
  stdio: ['inherit', 'pipe', 'pipe'],
});

backendProcess.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      console.log(`${CYAN}[BACKEND]${RESET} ${line}`);
    }
  });
});

backendProcess.stderr.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      console.error(`${YELLOW}[BACKEND ERR]${RESET} ${line}`);
    }
  });
});

// 2. Spawn Frontend Vite Process
// Direct path to vite bin to bypass any Windows PowerShell script restrictions
const viteBin = path.resolve(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');
let frontendProcess;

if (fs.existsSync(viteBin)) {
  frontendProcess = spawn(process.execPath, [viteBin], {
    cwd: process.cwd(),
    stdio: ['inherit', 'pipe', 'pipe'],
  });
} else {
  // Fallback to npx vite
  const npmCmd = isWindows ? 'npx.cmd' : 'npx';
  frontendProcess = spawn(npmCmd, ['vite'], {
    cwd: process.cwd(),
    shell: true,
    stdio: ['inherit', 'pipe', 'pipe'],
  });
}

frontendProcess.stdout.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      console.log(`${MAGENTA}[FRONTEND]${RESET} ${line}`);
    }
  });
});

frontendProcess.stderr.on('data', (data) => {
  const lines = data.toString().trim().split('\n');
  lines.forEach((line) => {
    if (line.trim()) {
      console.error(`${YELLOW}[FRONTEND ERR]${RESET} ${line}`);
    }
  });
});

// Clean termination handler
function shutdown() {
  console.log(`\n${YELLOW}Shutting down SafarNama development servers...${RESET}`);
  try {
    if (backendProcess && !backendProcess.killed) {
      if (isWindows) {
        spawn('taskkill', ['/pid', backendProcess.pid, '/f', '/t']);
      } else {
        backendProcess.kill('SIGTERM');
      }
    }
    if (frontendProcess && !frontendProcess.killed) {
      if (isWindows) {
        spawn('taskkill', ['/pid', frontendProcess.pid, '/f', '/t']);
      } else {
        frontendProcess.kill('SIGTERM');
      }
    }
  } catch (e) {}
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

backendProcess.on('close', (code) => {
  if (code !== 0 && code !== null) {
    console.log(`${CYAN}[BACKEND]${RESET} Exited with code ${code}`);
  }
});

frontendProcess.on('close', (code) => {
  if (code !== 0 && code !== null) {
    console.log(`${MAGENTA}[FRONTEND]${RESET} Exited with code ${code}`);
  }
});
