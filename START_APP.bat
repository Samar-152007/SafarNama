@echo off
title SafarNama AI Logistics Platform (NER)
cd /d "%~dp0"

echo =============================================================================
echo   SAFARNAMA: AI-BASED SMART LOGISTICS INTELLIGENCE PLATFORM (NER)
echo =============================================================================
echo   [+] Starting Express Backend Server (Port 5000)...
echo   [+] Starting React Frontend Dashboard (Port 5173)...
echo   [+] Opening browser at http://localhost:5173/dashboard...
echo =============================================================================
echo.

:: Automatically open browser after 2 seconds once Vite is ready
start "" http://localhost:5173/dashboard

:: Run both backend and frontend concurrently
node start.js

pause
