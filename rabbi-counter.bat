@echo off
echo Starting Rabbi Counter...
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in your PATH.
    pause
    exit /b
)

:: Run the file-sharing server
nodemon server.js

echo.
pause
