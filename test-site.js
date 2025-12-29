const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('🚀 Starting visual test of Aquatam website...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  const baseUrl = 'http://localhost:3000';
  const pages = [
    { path: '/', name: 'home' },
    { path: '/services', name: 'services' },
    { path: '/installs', name: 'installs' },
    { path: '/faq', name: 'faq' },
    { path: '/contact', name: 'contact' }
  ];

  console.log('📸 Testing pages...\n');

  for (const pageDef of pages) {
    console.log(`Testing: ${pageDef.name}`);

    try {
      // Go to page with simpler wait strategy
      await page.goto(baseUrl + pageDef.path, {
        waitUntil: 'domcontentloaded',
        timeout: 10000
      });

      // Wait a bit for hydration
      await new Promise(resolve => setTimeout(resolve, 1000));

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

      // Get page info
      const info = await page.evaluate(() => {
        return {
          hasHeader: !!document.querySelector('header'),
          hasNav: !!document.querySelector('nav'),
          hasFooter: !!document.querySelector('footer'),
          hasH1: !!document.querySelector('h1'),
          h1Text: document.querySelector('h1')?.innerText || '',
          linkCount: document.querySelectorAll('a').length,
          telLinks: document.querySelectorAll('a[href^="tel:"]').length,
          mailtoLinks: document.querySelectorAll('a[href^="mailto:"]').length,
          buttonCount: document.querySelectorAll('button').length
        };
      });

      console.log(`  ✅ Title: "${title}"`);
      console.log(`  ✅ H1: "${info.h1Text}"`);
      console.log(`  ✅ Header: ${info.hasHeader}`);
      console.log(`  ✅ Nav: ${info.hasNav}`);
      console.log(`  ✅ Footer: ${info.hasFooter}`);
      console.log(`  ✅ Links: ${info.linkCount}, Phone: ${info.telLinks}, Email: ${info.mailtoLinks}`);
      console.log(`  ✅ Buttons: ${info.buttonCount}`);
      console.log(`  📸 Screenshots saved\n`);

    } catch (error) {
      console.log(`  ❌ ERROR: ${error.message}\n`);
    }
  }

  await browser.close();
  console.log('✅ Testing complete! Check ./screenshots/ folder');

})();
