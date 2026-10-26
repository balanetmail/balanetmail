# Portfolio project rules
- Angular app. Resume content lives in src/assets/resume.json; edit that for content changes.
- For every task: create a branch `feature/<short-name>` from develop. Never commit to main.
- Before committing, run: npm run lint, npm run test:ci, npm run build. Fix failures first.
- Commit messages use Conventional Commits (feat:, fix:, chore:).
- After committing: push the branch and open a PR into develop with `gh pr create`, summarizing the change.