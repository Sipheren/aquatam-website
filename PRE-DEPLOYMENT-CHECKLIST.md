# Pre-Deployment Checklist

Use this checklist before deploying your Aquatam website to ensure everything is ready.

## 📋 Content Review

### Company Information
- [ ] Company name is correct in `src/content/siteConfig.ts`
- [ ] Tagline is appropriate
- [ ] Description accurately represents the business
- [ ] Founded year is correct (1998)

### Contact Information
- [ ] Ben's phone number: `0438 603 852` ✓
- [ ] Peter's phone number: `0418 280 592` ✓
- [ ] Ben's email: `ben@aquatam.com.au` ✓
- [ ] Peter's email: `pete@aquatam.com.au` ✓
- [ ] All phone numbers work when clicked
- [ ] All email addresses work when clicked

### Service Areas
- [ ] Coverage radius is correct (300km)
- [ ] All service areas are listed
- [ ] No typos in city names
- [ ] Add any missing areas to `siteConfig.ts`

### Services
- [ ] All services are listed in `src/content/services.ts`
- [ ] Service descriptions are accurate
- [ ] Pricing is current (check "From $85")
- [ ] Service features are complete

### FAQ
- [ ] All questions in `src/content/faq.ts` are relevant
- [ ] Answers are accurate and up-to-date
- [ ] No typos or grammatical errors
- [ ] Add any commonly asked questions

### Team Members
- [ ] Team member names are correct
- [ ] Roles/titles are accurate
- [ ] Contact information is current
- [ ] Bio descriptions are appropriate

## 🖼️ Images

### Required Images (currently placeholders)
- [ ] Add Ben's photo: `public/images/ben.jpg`
- [ ] Add Peter's photo: `public/images/peter.jpg`
- [ ] Add company logo (optional): `public/images/logo.png`

### Gallery Images
- [ ] Add installation photos to `public/images/gallery/`
- [ ] Update `src/content/gallery.ts` with actual image paths
- [ ] All images are optimized (compressed)
- [ ] Image file names are descriptive

### Image Guidelines
- [ ] Photos are high quality but compressed
- [ ] Use JPG for photos (smaller file size)
- [ ] Use PNG for logos/graphics with transparency
- [ ] Recommended size: 1200px wide or less

## 📧 Contact Form Setup

### Formspree Configuration
- [ ] Created Formspree account at [formspree.io](https://formspree.io)
- [ ] Created new form
- [ ] Copied form ID
- [ ] Updated `src/components/ContactForm.tsx` line 24:
  ```typescript
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  ```
- [ ] Replaced `YOUR_FORM_ID` with actual ID
- [ ] Saved the file

### Alternative: Netlify Forms
If using Netlify (easier):
- [ ] See Netlify Forms documentation
- [ ] No Formspree needed
- [ ] Form submissions go to Netlify dashboard

## 🔧 Technical Checks

### Build & Test
- [ ] Run `npm install` (if not done)
- [ ] Run `npm run dev` - site works locally
- [ ] Run `npm run build` - build succeeds
- [ ] Check `out/` folder exists with HTML files
- [ ] No errors in terminal output

### Browser Testing (Local)
- [ ] Home page loads correctly
- [ ] Services page displays all services
- [ ] FAQ accordion works (click to expand)
- [ ] Contact form can be filled out
- [ ] Gallery lightbox works (click images)
- [ ] Navigation menu works
- [ ] Mobile menu works (hamburger icon)

### Responsive Design
- [ ] Test on mobile (browser dev tools)
- [ ] Test on tablet size
- [ ] Test on desktop
- [ ] All text is readable
- [ ] No horizontal scrolling
- [ ] Buttons are tappable on mobile

### Links & Navigation
- [ ] All navigation links work
- [ ] Footer links work
- [ ] Phone number links work (tel:)
- [ ] Email links work (mailto:)
- [ ] CTA buttons go to correct pages

## 🚀 Deployment Preparation

### Choose Hosting Method
- [ ] Decided on hosting (Netlify/Vercel/Traditional)
- [ ] Read relevant section in DEPLOYMENT.md

### Domain Configuration
- [ ] Have access to domain registrar (for DNS)
- [ ] Know how to update DNS records
- [ ] Domain is ready (aquatam.com.au)

### Git Repository (for Netlify/Vercel)
- [ ] Created GitHub account
- [ ] Created repository
- [ ] Pushed code to GitHub
- [ ] Repository is accessible

OR

### Traditional Hosting
- [ ] Have FTP/SFTP credentials
- [ ] Know web root directory path
- [ ] Built files are ready in `out/` folder

## 🎨 Design Review

### Visual Check
- [ ] Brand colors look correct
- [ ] Font is readable
- [ ] Spacing looks professional
- [ ] No weird layout issues
- [ ] Images align properly

### Content Check
- [ ] No placeholder text (like "Lorem ipsum")
- [ ] No "TODO" or "COMING SOON" text
- [ ] All sections have real content
- [ ] Grammar and spelling are correct

## 🔍 SEO Basics

### Meta Information
- [ ] Page titles are descriptive
- [ ] Meta descriptions exist (automatically set)
- [ ] Site name is correct

### Future SEO (After Launch)
- [ ] Plan to submit to Google Search Console
- [ ] Plan to create Google My Business
- [ ] Consider Google Analytics

## 📱 Final Checks

### Before Going Live
- [ ] All checklist items above complete
- [ ] Content reviewed by stakeholders
- [ ] Test build is successful
- [ ] Deployment method chosen
- [ ] Contact form tested (after deployment)

### After Deployment
- [ ] Test all pages on live site
- [ ] Submit contact form (test it works)
- [ ] Check mobile version on real device
- [ ] Ask colleague to review site
- [ ] Check site loads in different browsers

## 🎯 Go/No-Go Decision

All critical items checked? ✅

**Critical (Must Have):**
- Build succeeds without errors
- All pages load
- Contact information is correct
- Navigation works
- Form is configured

**Nice to Have:**
- Real team photos
- Gallery images
- Custom logo

If all critical items are done, you're ready to deploy!

## 📝 Deployment Day Checklist

1. [ ] Run final `npm run build`
2. [ ] Deploy using chosen method (see DEPLOYMENT.md)
3. [ ] Wait for deployment to complete
4. [ ] Visit live site
5. [ ] Test all pages
6. [ ] Test contact form
7. [ ] Check mobile version
8. [ ] Share with team for feedback
9. [ ] Make note of any issues
10. [ ] Fix issues and redeploy if needed

## 🆘 Emergency Contacts

If something goes wrong:
- Developer contact: [Your developer's contact info]
- Hosting support: Check your hosting provider
- Domain registrar: Check your domain provider

## 📊 Post-Launch Tasks

Within first week:
- [ ] Monitor contact form submissions
- [ ] Check for any error reports
- [ ] Gather user feedback
- [ ] Make minor adjustments as needed

Within first month:
- [ ] Add more gallery images
- [ ] Update any content based on feedback
- [ ] Set up analytics
- [ ] Submit to search engines

## ✅ Success!

Once deployed and tested, your new Aquatam website is live!

**Remember:** You can always update content later by:
1. Editing files in `src/content/`
2. Running `npm run build`
3. Redeploying

Good luck! 🚀
