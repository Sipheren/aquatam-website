const puppeteer = require('puppeteer');
const fs = require('fs');

const baseUrl = 'http://localhost:3000';
const pages = [
  { name: 'home', path: '/', tests: ['nav-hover', 'brand-hover', 'hero-buttons', 'cta-buttons'] },
  { name: 'services', path: '/services', tests: ['nav-hover', 'why-choose-boxes', 'service-cards', 'brand-boxes'] },
  { name: 'installs', path: '/installs', tests: ['nav-hover', 'tank-list', 'installation-process'] },
  { name: 'faq', path: '/faq', tests: ['nav-hover', 'accordion-items'] },
  { name: 'contact', path: '/contact', tests: ['nav-hover', 'contact-form', 'contact-info'] }
];

const issues = [];

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function testPage(browser, pageDef) {
  const page = await browser.newPage();
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Testing: ${pageDef.name.toUpperCase()} (${pageDef.path})`);
  console.log('='.repeat(60));

  try {
    await page.goto(baseUrl + pageDef.path, {
      waitUntil: 'networkidle2',
      timeout: 15000
    });

    await wait(1000);

    // Test 1: Check if images load
    console.log('\n📸 Checking images...');
    const imageResults = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img'));
      return images.map(img => ({
        src: img.src,
        alt: img.alt,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        complete: img.complete,
        loaded: img.naturalWidth > 0
      }));
    });

    const brokenImages = imageResults.filter(img => !img.loaded);
    if (brokenImages.length > 0) {
      console.log(`  ❌ Found ${brokenImages.length} broken images:`);
      brokenImages.forEach(img => {
        console.log(`     - ${img.src} (alt: "${img.alt}")`);
        issues.push({ page: pageDef.name, type: 'broken-image', details: img.src });
      });
    } else {
      console.log(`  ✅ All ${imageResults.length} images loaded successfully`);
    }

    // Test 2: Check navigation hover states
    if (pageDef.tests.includes('nav-hover')) {
      console.log('\n🖱️  Testing navigation hover states...');
      await page.setViewport({ width: 1920, height: 1080 });

      const navLinks = await page.$$('nav a[href="/services"], nav a[href="/installs"]');
      if (navLinks.length > 0) {
        const navLink = navLinks[0];

        // Get initial styles
        const beforeHover = await page.evaluate(el => {
          const styles = window.getComputedStyle(el);
          return {
            backgroundColor: styles.backgroundColor,
            color: styles.color
          };
        }, navLink);

        // Hover and get styles
        await navLink.hover();
        await wait(200);

        const afterHover = await page.evaluate(el => {
          const styles = window.getComputedStyle(el);
          return {
            backgroundColor: styles.backgroundColor,
            color: styles.color
          };
        }, navLink);

        if (beforeHover.backgroundColor === afterHover.backgroundColor) {
          console.log('  ⚠️  Navigation hover state may not be working');
          console.log(`     Before: ${beforeHover.backgroundColor}`);
          console.log(`     After:  ${afterHover.backgroundColor}`);
          issues.push({ page: pageDef.name, type: 'nav-hover', details: 'No background color change on hover' });
        } else {
          console.log('  ✅ Navigation hover states working');
          console.log(`     Before: ${beforeHover.backgroundColor}`);
          console.log(`     After:  ${afterHover.backgroundColor}`);
        }
      }
    }

    // Test 3: Check brand hover animations (home page)
    if (pageDef.tests.includes('brand-hover')) {
      console.log('\n🎨 Testing brand logo hover animations...');
      const brandLogos = await page.$$('.hover\\:scale-110');

      if (brandLogos.length > 0) {
        const logo = brandLogos[0];
        const beforeTransform = await page.evaluate(el => {
          return window.getComputedStyle(el).transform;
        }, logo);

        await logo.hover();
        await wait(500); // Wait for transition

        const afterTransform = await page.evaluate(el => {
          return window.getComputedStyle(el).transform;
        }, logo);

        if (beforeTransform === afterTransform) {
          console.log('  ⚠️  Brand hover animation may not be working');
          issues.push({ page: pageDef.name, type: 'brand-hover', details: 'No transform on hover' });
        } else {
          console.log('  ✅ Brand hover animations working');
        }
      }
    }

    // Test 4: Check contact form styling
    if (pageDef.tests.includes('contact-form')) {
      console.log('\n📝 Testing contact form...');
      const formExists = await page.$('form');
      if (formExists) {
        const formContainer = await page.$('form').then(f => f?.evaluate(el => el.closest('div.bg-white')));
        if (formContainer) {
          console.log('  ✅ Form wrapped in white container');
        } else {
          console.log('  ⚠️  Form may not be in white container');
          issues.push({ page: pageDef.name, type: 'form-styling', details: 'Missing white container' });
        }

        // Check input styling
        const inputStyle = await page.evaluate(() => {
          const input = document.querySelector('input[type="text"]');
          if (input) {
            const styles = window.getComputedStyle(input);
            return {
              borderWidth: styles.borderWidth,
              backgroundColor: styles.backgroundColor
            };
          }
          return null;
        });

        if (inputStyle) {
          console.log(`  Input styling: border=${inputStyle.borderWidth}, bg=${inputStyle.backgroundColor}`);
        }
      }
    }

    // Take screenshots
    console.log('\n📸 Capturing screenshots...');

    // Desktop
    await page.setViewport({ width: 1920, height: 1080 });
    await wait(500);
    await page.screenshot({
      path: `./debug-screenshots/${pageDef.name}-desktop.png`,
      fullPage: true
    });
    console.log(`  ✅ Desktop screenshot saved`);

    // Mobile
    await page.setViewport({ width: 375, height: 667 });
    await wait(500);
    await page.screenshot({
      path: `./debug-screenshots/${pageDef.name}-mobile.png`,
      fullPage: true
    });
    console.log(`  ✅ Mobile screenshot saved`);

  } catch (error) {
    console.log(`\n❌ Error testing ${pageDef.name}:`, error.message);
    issues.push({ page: pageDef.name, type: 'error', details: error.message });
  } finally {
    await page.close();
  }
}

async function runTests() {
  console.log('🚀 Starting comprehensive visual debugging...\n');

  // Create debug screenshots directory
  if (!fs.existsSync('./debug-screenshots')) {
    fs.mkdirSync('./debug-screenshots');
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const pageDef of pages) {
    await testPage(browser, pageDef);
  }

  await browser.close();

  // Summary
  console.log(`\n\n${'='.repeat(60)}`);
  console.log('SUMMARY');
  console.log('='.repeat(60));

  if (issues.length === 0) {
    console.log('✅ No issues found!');
  } else {
    console.log(`❌ Found ${issues.length} issue(s):\n`);
    issues.forEach((issue, i) => {
      console.log(`${i + 1}. [${issue.page}] ${issue.type}: ${issue.details}`);
    });
  }

  // Save issues to file
  fs.writeFileSync('./debug-screenshots/issues.json', JSON.stringify(issues, null, 2));
  console.log(`\n📄 Full report saved to: ./debug-screenshots/issues.json`);
}

runTests().catch(console.error);
