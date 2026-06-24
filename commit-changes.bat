@echo off
cd /d "%~dp0"
echo Removing git lock file...
del /f ".git\index.lock" 2>nul
echo Running git add...
git add -A
echo Committing changes...
git commit -m "feat: ink/paper theme, duotone icons, wavy nav, email update, UX polish"
echo Done!
pause
