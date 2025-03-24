# Craft Studio

A modern web application built with React, Express, and styled with Tailwind CSS.

## Deployment on Netlify

This project is configured for deployment on Netlify with serverless functions.

### Automatic Deployment

1. Connect your GitHub repository to Netlify
2. Use the following build settings:
   - Build command: `npm run build && npm run build:functions`
   - Publish directory: `dist/public`
   - Functions directory: `dist/functions`

### Environment Variables

Make sure to set the following environment variables in your Netlify dashboard:
- Add any required API keys or configuration values

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
npm run build:functions

# Test Netlify functions locally
npm run netlify-dev
```

## Project Structure

- `/client` - Frontend React application
- `/server` - Backend API logic
- `/netlify` - Netlify-specific configuration and functions
- `/shared` - Shared code between client and server 