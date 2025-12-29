# Aquatam Waste Water Website

Next.js static website with Google Sheets CMS for easy content management.

## Quick Start

```bash
npm install
npm run dev
```

## Google Sheets CMS

All content is managed via Google Sheets. See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for full setup instructions.

### Daily Auto-Deploy

The site automatically rebuilds daily at 2 AM UTC, fetching the latest content from Google Sheets and deploying to the server.

### Manual Deploy

To manually trigger a deployment:
1. Go to GitHub → Actions tab
2. Click "Build and Deploy"
3. Click "Run workflow"

## Local Development

```bash
# Fetch latest content from Google Sheets
export GOOGLE_SHEET_ID="your_sheet_id"
npm run fetch-content

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is automatically deployed via GitHub Actions to:
- **Test**: https://aquatam.sipheren.com
- **Production**: (to be configured)

## Content Management

Ben can edit content by updating the Google Sheet. Changes go live automatically the next day.

For urgent updates, manually trigger the GitHub Action workflow.
