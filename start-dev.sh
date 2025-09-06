#!/bin/bash

# Start development server with legacy OpenSSL provider for Node.js compatibility
export NODE_OPTIONS="--openssl-legacy-provider"
npm run serve
