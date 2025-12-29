# Deployment Guide

This guide will help you deploy your Aquatam website to a live server.

## Prerequisites

Before deploying, make sure:
- [x] You have edited all content in `src/content/` files
- [x] You have added your images to `public/images/`
- [x] You have set up your Formspree contact form (see README.md)
- [x] The site builds successfully (`npm run build`)

## Method 1: Traditional Web Hosting (cPanel, FTP)

Perfect if you already have web hosting from providers like GoDaddy, Bluehost, SiteGround, etc.

### Step 1: Build the Site
```bash
npm run build
```

This creates a static version of your website in the `out/` folder.

### Step 2: Upload Files

**Using FTP/SFTP:**
1. Connect to your hosting using an FTP client (FileZilla, Cyberduck, etc.)
2. Navigate to your web root directory (usually `public_html/` or `www/`)
3. Upload ALL files and folders from the `out/` directory
4. Make sure the folder structure is preserved

**Using cPanel File Manager:**
1. Log into your cPanel
2. Open File Manager
3. Navigate to `public_html/`
4. Upload and extract a ZIP of the `out/` folder contents
5. Ensure all files are in the root, not in a subfolder

### Step 3: Test
Visit your domain (e.g., aquatam.com.au) to verify the site is live.

## Method 2: Netlify (Recommended - Free & Easy)

Netlify offers free hosting with automatic deployments.

### Step 1: Create a GitHub Repository
1. Create a free account at [github.com](https://github.com)
2. Create a new repository called "aquatam-website"
3. Upload your project files to GitHub

### Step 2: Deploy to Netlify
1. Create a free account at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"

### Step 3: Custom Domain
1. In Netlify, go to Site settings → Domain management
2. Add your custom domain (e.g., aquatam.com.au)
3. Follow Netlify's instructions to update your DNS settings

**Benefits:**
- Free SSL certificate (HTTPS)
- Automatic deployments when you push changes
- Form handling without Formspree
- Fast global CDN

## Method 3: Vercel (Alternative to Netlify)

Similar to Netlify, optimized for Next.js.

### Steps:
1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Add your custom domain in project settings

## Updating Your Website

### For Traditional Hosting:
1. Edit content in `src/content/` files
2. Run `npm run build`
3. Upload the new `out/` folder contents via FTP

### For Netlify/Vercel:
1. Edit content in `src/content/` files
2. Commit and push changes to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Your site will automatically rebuild and deploy!

## DNS Configuration

If you're using Netlify or Vercel with your existing domain:

### For aquatam.com.au:
1. Log into your domain registrar
2. Find DNS settings
3. Add these records:

**Netlify:**
- A Record: `@` → `75.2.60.5`
- CNAME: `www` → `your-site.netlify.app`

**Vercel:**
- A Record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

## Troubleshooting

### Site shows 404 errors
- Ensure files are in the web root directory
- Check `.htaccess` or server configuration for trailing slashes

### Images not loading
- Verify images are in the `out/images/` folder
- Check file paths start with `/images/` not `./images/`

### Contact form not working
- Verify Formspree form ID is correct in `ContactForm.tsx`
- For Netlify, you can use Netlify Forms instead (free)

### Build fails
Run `npm run build` locally first to check for errors

## Next Steps After Deployment

1. Test all pages and links
2. Test the contact form
3. Check mobile responsiveness
4. Verify all images load
5. Test in different browsers
6. Set up Google Analytics (optional)
7. Submit to Google Search Console (optional)

## Recommended Tools

- **FTP Client:** FileZilla (free)
- **Code Editor:** VS Code (free)
- **Image Optimization:** TinyPNG.com (free)
- **Performance Testing:** PageSpeed Insights (free)

## Support

If you encounter issues during deployment:
1. Check the build succeeds locally: `npm run build`
2. Verify all dependencies are installed: `npm install`
3. Check browser console for errors
4. Review hosting provider documentation

For technical assistance, contact your web developer.
