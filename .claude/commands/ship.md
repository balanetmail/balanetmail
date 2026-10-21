---
description: Implement a portfolio change, then branch, check, commit, push and open a PR
argument-hint: <change to make>
model: sonnet
---
Implement the requested change: $ARGUMENTS
Resume content is already in src/assets/resume.json — use that. Only if a needed fact is missing, read asset/Balamurugan_Gopal_Resume_1Page.pdf; never the other PDFs.
Then follow CLAUDE.md: branch from develop, commit, push, open a PR into develop.
Checks: run each once — `npm run lint` (skip if the script doesn't exist), `npx ng test --watch=false`, `npx ng build`. Don't re-read files you just wrote.
If `gh` isn't authenticated, don't retry; give the compare URL and PR text.
Finally, report the PR link in a few lines.
