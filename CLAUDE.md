# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

elease-ui is the **production deployment repository** for the E-Lease application. It contains the pre-built Angular application served via Nginx in a Docker container. The source code is in the sibling `elease/` directory.

## Commands

```bash
docker build -t elease-ui:latest .     # Build Docker image
docker run -p 8080:80 elease-ui:latest # Run container locally (port 8080)
docker logs elease-ui                   # View container logs
```

## Architecture

### Deployment Stack
- **Base Image**: nginx:latest
- **Web Root**: `/usr/share/nginx/html` (contains www/ contents)
- **Port**: 80 (HTTP)

### SPA Routing
The `nginx.conf` is critical for Angular routing:
- `try_files $uri $uri/ /index.html;` ensures all routes (e.g., `/login`, `/tabs`) serve index.html
- Without this, refreshing on an Angular route returns 404

### Build Output (www/)
This is Angular's production build output from `elease/`:
- `index.html` - SPA entry point
- `main.*.js` - Main application bundle
- Lazy-loaded chunks for feature modules
- `assets/` - Static files (logo, icons, sample data)

## Deployment Workflow

1. **Build Angular app** in `elease/`: `npm run build` (outputs to `www/`)
2. **Copy www/** to this repository
3. **Build Docker image**: `docker build -t elease-ui:latest .`
4. **Deploy** to server with Docker

## Files

| File | Purpose |
|------|---------|
| `Dockerfile` | Nginx container definition |
| `nginx.conf` | Nginx config for Angular SPA routing |
| `www/` | Production-built Angular application |

## Updating the Build

After modifying source code in `elease/`:
```bash
cd ../elease
npm run build
cp -r www ../elease-ui/
cd ../elease-ui
docker build -t elease-ui:latest .
```