#!/usr/bin/env bash
set -e  # stop if any command fails

# CONFIG
BUILD_DIR="dist"
WORKTREE_DIR="../gh-pages"
BRANCH="gh-pages"

echo "🚀 Starting deployment..."

# 1. Ensure gh-pages worktree exists
if [ ! -d "$WORKTREE_DIR" ]; then
  echo "⚡ Adding gh-pages worktree at $WORKTREE_DIR"
  git worktree add "$WORKTREE_DIR" "$BRANCH"
fi

# 2. Build the site
echo "🏗️ Building site..."
NODE_OPTIONS="--openssl-legacy-provider" npm run build

# 3. Sync files safely into worktree
echo "📂 Syncing build to $WORKTREE_DIR..."
rsync -av --delete "$BUILD_DIR"/ "$WORKTREE_DIR"/ --exclude '.git'

# 4. Commit & push
cd "$WORKTREE_DIR"
git add .
if git diff --cached --quiet; then
  echo "✅ No changes to deploy."
else
  git commit -m "Deploy site $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin "$BRANCH"
  echo "🎉 Deployment complete!"
fi

# 5. Return to main project
cd - > /dev/null
