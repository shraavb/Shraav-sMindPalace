#!/bin/bash

# Start development server with legacy OpenSSL provider for Node.js compatibility
set -e
export NODE_OPTIONS="--openssl-legacy-provider"

# Ensure dependencies are installed
if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm ci >/dev/null 2>&1 || npm install --silent
fi

# Ensure vue-cli-service is available
if ! npx --no-install vue-cli-service --version >/dev/null 2>&1; then
  echo "Adding @vue/cli-service locally..."
  npm i -D @vue/cli-service@~4.3.0 >/dev/null 2>&1 || true
fi

# Start the dev server
npx vue-cli-service serve
