#!/bin/bash

# Local build and deploy script for Aquatam Website
# Deploys to SMB network share: //192.168.200.209/Websites/aquatam

set -e

echo "🚀 Starting local build and deploy..."

# Set the Google Sheet ID
export GOOGLE_SHEET_ID="1Gx9slvEpbXvlntFSC9lfP7oOzjGLnPYvzDBGvG3A18Y"

# Fetch content from Google Sheets
echo "📄 Fetching content from Google Sheets..."
npm run fetch-content

# Build the site
echo "🏗️  Building site..."
npm run build

# Define the network share path
NETWORK_SHARE="/Volumes/Websites/aquatam"

# Check if network share is mounted
if [ ! -d "/Volumes/Websites" ]; then
  echo "❌ Network share not mounted at /Volumes/Websites"
  echo "💡 Please mount the SMB share first:"
  echo "   Finder → Go → Connect to Server → smb://192.168.200.209/Websites"
  exit 1
fi

# Create aquatam directory if it doesn't exist
mkdir -p "$NETWORK_SHARE"

# Deploy to network share
echo "📦 Deploying to network share..."
rsync -av --delete ./out/ "$NETWORK_SHARE/"

echo "✅ Deployment complete!"
echo "🌐 Site deployed to: $NETWORK_SHARE"
