const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Starting quick visual test...\n');

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
    tests: [],
    errors: []
  };

  // Test HTML files directly
  const htmlFiles = [
    { file: 'out/index.html', name: 'home' },
    { file: 'out/services/index.html', name: 'services' },
    { file: 'out/installs/index.html', name: 'installs' },
    { file: 'out/faq/index.html', name: 'faq' },
    { file: 'out/contact/index.html', name: 'contact' }
  ];

  for (const htmlDef of htmlFiles) {
    console.log(`📄 Testing: ${htmlDef.name}`);

    try {
      const filePath = path.resolve(__dirname, htmlDef.file);
      await page.goto(`file://${filePath}`, { waitUntil: 'load' });

      // Get page title
      const title = await page.title();

      // Desktop screenshot
      await page.setViewport({ width: 1920, height: 1080 });
      await page.screenshot({
        path: `./screenshots/${htmlDef.name}-desktop.png`,
        fullPage: true
      });

      // Tablet screenshot
      await page.setViewport({ width: 768, height: 1024 });
      await page.screenshot({
        path: `./screenshots/${htmlDef.name}-tablet.png`,
        fullPage: true
      });

      // Mobile screenshot
      await page.setViewport({ width: 375, height: 667 });
      await page.screenshot({
        path: `./screenshots/${htmlDef.name}-mobile.png`,
        fullPage: true
      });

      // Check for essential elements
      const checks = await page.evaluate(() => {
        return {
          hasHeader: !!document.querySelector('header'),
          hasNav: !!document.querySelector('nav'),
          hasMain: !!document.querySelector('main'),
          hasFooter: !!document.querySelector('footer'),
          hasH1: !!document.querySelector('h1'),
          linkCount: document.querySelectorAll('a').length,
          telLinks: Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a => a.href),
          mailtoLinks: Array.from(document.querySelectorAll('a[href^="mailto:"]')).map(a => a.href),
          images: Array.from(document.querySelectorAll('img')).map(img => ({
            src: img.src,
            alt: img.alt,
            complete: img.complete
          })),
          buttons: document.querySelectorAll('button').length
        };
      });

      results.tests.push({
        page: htmlDef.name,
        title: title,
        ...checks,
        status: '✅ Pass'
      });

      console.log(`  ✅ Title: "${title}"`);
      console.log(`  ✅ Header: ${checks.hasHeader ? 'Yes' : 'No'}`);
      console.log(`  ✅ Navigation: ${checks.hasNav ? 'Yes' : 'No'}`);
      console.log(`  ✅ Main content: ${checks.hasMain ? 'Yes' : 'No'}`);
      console.log(`  ✅ Footer: ${checks.hasFooter ? 'Yes' : 'No'}`);
      console.log(`  ✅ H1 heading: ${checks.hasH1 ? 'Yes' : 'No'}`);
      console.log(`  ✅ Links: ${checks.linkCount}`);
      console.log(`  ✅ Phone links: ${checks.telLinks.length}`);
      console.log(`  ✅ Email links: ${checks.mailtoLinks.length}`);
      console.log(`  ✅ Buttons: ${checks.buttons}`);
      console.log(`  ✅ Images: ${checks.images.length}`);
      console.log(`  📸 Screenshots saved (desktop, tablet, mobile)\n`);

    } catch (error) {
      results.tests.push({
        page: htmlDef.name,
        status: '❌ Fail',
        error: error.message
      });
      console.log(`  ❌ Error: ${error.message}\n`);
    }
  }

  // Save results
  fs.writeFileSync('./screenshots/test-results.json', JSON.stringify(results, null, 2));

  await browser.close();

  console.log('=' + '='.repeat(60));
  console.log('📊 TEST SUMMARY');
  console.log('=' + '='.repeat(60));
  console.log(`✅ Pages tested: ${results.tests.length}`);
  console.log(`✅ All tests passed: ${results.tests.filter(t => t.status.includes('Pass')).length === results.tests.length ? 'YES' : 'NO'}`);
  console.log(`📁 Screenshots saved to: ./screenshots/`);
  console.log(`📄 Full results: ./screenshots/test-results.json`);
  console.log('=' + '='.repeat(60) + '\n');

})();
