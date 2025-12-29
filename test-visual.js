const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('Starting visual test...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Create screenshots directory
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  const results = {
    pages: [],
    links: [],
    errors: [],
    console: []
  };

  // Listen for console messages
  page.on('console', msg => {
    const text = msg.text();
    results.console.push({
      type: msg.type(),
      text: text
    });
    if (msg.type() === 'error') {
      console.log('❌ Console Error:', text);
    }
  });

  // Listen for page errors
  page.on('pageerror', error => {
    results.errors.push(error.message);
    console.log('❌ Page Error:', error.message);
  });

  const baseUrl = 'http://localhost:3000';

  const pages = [
    { path: '/', name: 'home' },
    { path: '/services', name: 'services' },
    { path: '/installs', name: 'installs' },
    { path: '/faq', name: 'faq' },
    { path: '/contact', name: 'contact' }
  ];

  console.log('\n📸 Testing pages and taking screenshots...\n');

  for (const pageDef of pages) {
    console.log(`Testing: ${pageDef.name} (${pageDef.path})`);

    try {
      await page.goto(baseUrl + pageDef.path, { waitUntil: 'networkidle0', timeout: 30000 });

      // Get page title
      const title = await page.title();

      // Desktop screenshot
      await page.setViewport({ width: 1920, height: 1080 });
      await page.screenshot({
        path: `./screenshots/${pageDef.name}-desktop.png`,
        fullPage: true
      });

      // Mobile screenshot
      await page.setViewport({ width: 375, height: 667 });
      await page.screenshot({
        path: `./screenshots/${pageDef.name}-mobile.png`,
        fullPage: true
      });

      // Get all links on the page
      const links = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('a'));
        return anchors.map(a => ({
          href: a.href,
          text: a.innerText.trim()
        }));
      });

      // Check for broken images
      const brokenImages = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.filter(img => !img.complete || img.naturalHeight === 0).map(img => img.src);
      });

      // Check if navigation is visible
      const hasNav = await page.evaluate(() => {
        const nav = document.querySelector('nav');
        return nav !== null;
      });

      // Check if footer is visible
      const hasFooter = await page.evaluate(() => {
        const footer = document.querySelector('footer');
        return footer !== null;
      });

      results.pages.push({
        name: pageDef.name,
        path: pageDef.path,
        title: title,
        status: '✅ Pass',
        hasNav: hasNav,
        hasFooter: hasFooter,
        linkCount: links.length,
        brokenImages: brokenImages
      });

      console.log(`  ✅ Title: "${title}"`);
      console.log(`  ✅ Navigation: ${hasNav ? 'Present' : 'Missing'}`);
      console.log(`  ✅ Footer: ${hasFooter ? 'Present' : 'Missing'}`);
      console.log(`  ✅ Links found: ${links.length}`);
      console.log(`  ✅ Broken images: ${brokenImages.length}`);
      console.log(`  ✅ Screenshots saved\n`);

    } catch (error) {
      results.pages.push({
        name: pageDef.name,
        path: pageDef.path,
        status: '❌ Fail',
        error: error.message
      });
      console.log(`  ❌ Error: ${error.message}\n`);
    }
  }

  // Test mobile menu interaction
  console.log('📱 Testing mobile menu...\n');
  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 375, height: 667 });

    // Check if mobile menu button exists
    const mobileMenuButton = await page.$('button[type="button"]');

    if (mobileMenuButton) {
      console.log('  ✅ Mobile menu button found');

      // Take screenshot before click
      await page.screenshot({ path: './screenshots/mobile-menu-closed.png' });

      // Click the mobile menu
      await mobileMenuButton.click();
      await page.waitForTimeout(500); // Wait for animation

      // Take screenshot after click
      await page.screenshot({ path: './screenshots/mobile-menu-open.png' });

      console.log('  ✅ Mobile menu interaction tested\n');
    } else {
      console.log('  ⚠️  Mobile menu button not found\n');
    }
  } catch (error) {
    console.log(`  ❌ Mobile menu test error: ${error.message}\n`);
  }

  // Test FAQ accordion
  console.log('❓ Testing FAQ accordion...\n');
  try {
    await page.goto(baseUrl + '/faq', { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 1920, height: 1080 });

    // Find FAQ buttons
    const faqButtons = await page.$$('button');

    if (faqButtons.length > 0) {
      console.log(`  ✅ Found ${faqButtons.length} FAQ buttons`);

      // Screenshot before clicking
      await page.screenshot({ path: './screenshots/faq-before.png', fullPage: true });

      // Click first FAQ item
      await faqButtons[0].click();
      await page.waitForTimeout(300);

      // Screenshot after clicking
      await page.screenshot({ path: './screenshots/faq-after-click.png', fullPage: true });

      console.log('  ✅ FAQ accordion interaction tested\n');
    } else {
      console.log('  ⚠️  No FAQ buttons found\n');
    }
  } catch (error) {
    console.log(`  ❌ FAQ test error: ${error.message}\n`);
  }

  // Test contact form
  console.log('📧 Testing contact form...\n');
  try {
    await page.goto(baseUrl + '/contact', { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 1920, height: 1080 });

    // Check if form exists
    const form = await page.$('form');

    if (form) {
      console.log('  ✅ Contact form found');

      // Check form fields
      const nameField = await page.$('input[name="name"]');
      const emailField = await page.$('input[name="email"]');
      const phoneField = await page.$('input[name="phone"]');
      const subjectField = await page.$('select[name="subject"]');
      const messageField = await page.$('textarea[name="message"]');
      const submitButton = await page.$('button[type="submit"]');

      console.log(`  ✅ Name field: ${nameField ? 'Present' : 'Missing'}`);
      console.log(`  ✅ Email field: ${emailField ? 'Present' : 'Missing'}`);
      console.log(`  ✅ Phone field: ${phoneField ? 'Present' : 'Missing'}`);
      console.log(`  ✅ Subject field: ${subjectField ? 'Present' : 'Missing'}`);
      console.log(`  ✅ Message field: ${messageField ? 'Present' : 'Missing'}`);
      console.log(`  ✅ Submit button: ${submitButton ? 'Present' : 'Missing'}`);

      await page.screenshot({ path: './screenshots/contact-form.png', fullPage: true });
      console.log('  ✅ Contact form screenshot saved\n');
    } else {
      console.log('  ❌ Contact form not found\n');
    }
  } catch (error) {
    console.log(`  ❌ Contact form test error: ${error.message}\n`);
  }

  // Test all phone and email links
  console.log('📞 Testing contact links...\n');
  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle0' });

    const contactLinks = await page.evaluate(() => {
      const telLinks = Array.from(document.querySelectorAll('a[href^="tel:"]'));
      const mailtoLinks = Array.from(document.querySelectorAll('a[href^="mailto:"]'));

      return {
        phone: telLinks.map(a => ({ href: a.href, text: a.innerText.trim() })),
        email: mailtoLinks.map(a => ({ href: a.href, text: a.innerText.trim() }))
      };
    });

    console.log(`  ✅ Phone links found: ${contactLinks.phone.length}`);
    contactLinks.phone.forEach(link => {
      console.log(`     - ${link.href} (${link.text})`);
    });

    console.log(`  ✅ Email links found: ${contactLinks.email.length}`);
    contactLinks.email.forEach(link => {
      console.log(`     - ${link.href} (${link.text})`);
    });
    console.log('');

  } catch (error) {
    console.log(`  ❌ Contact links test error: ${error.message}\n`);
  }

  // Save results to JSON
  fs.writeFileSync('./screenshots/test-results.json', JSON.stringify(results, null, 2));

  await browser.close();

  console.log('✅ Visual testing complete!');
  console.log('📁 Screenshots saved to ./screenshots/');
  console.log('📄 Test results saved to ./screenshots/test-results.json');

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total pages tested: ${results.pages.length}`);
  console.log(`Passed: ${results.pages.filter(p => p.status.includes('Pass')).length}`);
  console.log(`Failed: ${results.pages.filter(p => p.status.includes('Fail')).length}`);
  console.log(`Console errors: ${results.console.filter(c => c.type === 'error').length}`);
  console.log(`Page errors: ${results.errors.length}`);
  console.log('='.repeat(50) + '\n');

})();
