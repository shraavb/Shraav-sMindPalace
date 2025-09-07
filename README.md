# Portfolio Website

A Vue.js portfolio website showcasing projects, skills, and experience.

## Development

### Prerequisites
- Node.js (version 16 or higher recommended)
- npm

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run serve:legacy
# or use the convenience script
./start-dev.sh
```

The development server will be available at `http://localhost:8080` (or another port if 8080 is busy).

## Deployment

### Quick Deployment
To deploy the website to GitHub Pages, simply run:

```bash
./deploy.sh
```

This script will:
1. Build the project with the correct settings
2. Sync files to the `gh-pages` branch
3. Commit and push changes automatically

### Manual Deployment
If you prefer to deploy manually:

```bash
# Build the project
npm run build:legacy

# Copy built files to gh-pages directory
cp -r dist/* ../gh-pages/

# Commit and push to gh-pages branch
cd ../gh-pages
git add .
git commit -m "Deploy site $(date '+%Y-%m-%d %H:%M:%S')"
git push origin gh-pages
```

### GitHub Pages Configuration
1. Go to your repository settings: `Settings` → `Pages`
2. Set source to "Deploy from a branch"
3. Select `gh-pages` branch and `/ (root)` folder
4. Save the configuration

## Project Structure

- `src/` - Vue.js source code
- `public/` - Static assets
- `dist/` - Built files (generated)
- `gh-pages/` - Deployment branch (generated)
- `deploy.sh` - Deployment script
- `start-dev.sh` - Development server script

## Technologies Used

- Vue.js 2
- Vue CLI
- HTML/CSS/JavaScript
- GitHub Pages for hosting
