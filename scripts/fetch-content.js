const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

// Google Sheets ID - Replace with your actual sheet ID
const SHEET_ID = process.env.GOOGLE_SHEET_ID || 'YOUR_SHEET_ID_HERE';
// Published sheet ID (from /pub URL)
const PUBLISHED_SHEET_ID = '2PACX-1vT8mzcpXFgzCn2qxQX27lbmmGjUtYrEmvHm_YOHjLFzpo9yjlvMsYtX_4qf76EZ98wZS9iGUHwLkJCF';

// Function to fetch CSV from Google Sheets
async function fetchSheet(gid) {
  const url = `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_SHEET_ID}/pub?gid=${gid}&single=true&output=csv`;
  const response = await fetch(url);
  const csv = await response.text();
  return Papa.parse(csv, { header: true, skipEmptyLines: true }).data;
}

// Generate siteConfig.ts
async function generateSiteConfig() {
  console.log('📄 Fetching Site Config...');
  const data = await fetchSheet('0'); // Site Config sheet (gid=0)

  const config = data.reduce((acc, row) => {
    if (row.key && row.value) {
      acc[row.key] = row.value;
    }
    return acc;
  }, {});

  const content = `export const siteConfig = {
  name: "${config.name || 'Aquatam Waste Water'}",
  tagline: "${config.tagline || 'Professional AWTS Services Since 1998'}",
  description: "${config.description || 'Expert AWTS services'}",
  phone: {
    ben: "${config.phone || '0438 603 852'}",
  },
  email: {
    ben: "${config.email || 'ben@aquatam.com.au'}",
  },
  location: "${config.location || 'Tamworth, NSW'}",
  serviceRadius: "${config.serviceRadius || '300km'}",
  foundedYear: ${config.foundedYear || 1998},
  coverageAreas: ${JSON.stringify(config.coverageAreas?.split(',').map(s => s.trim()) || ['Tamworth'])},
  supportedBrands: ${JSON.stringify(config.supportedBrands?.split(',').map(s => s.trim()) || ['Taylex'])},
};
`;

  fs.writeFileSync(
    path.join(__dirname, '../src/content/siteConfig.ts'),
    content
  );
  console.log('✅ Site Config generated');
}

// Generate services.ts
async function generateServices() {
  console.log('📄 Fetching Services...');
  const data = await fetchSheet('826896158'); // Services sheet

  const services = data.filter(row => row.title).map(row => ({
    title: row.title,
    description: row.description,
    icon: row.icon || 'wrench',
    link: row.link || '/services'
  }));

  const content = `export interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const services: Service[] = ${JSON.stringify(services, null, 2)};

export const serviceFeatures = [
  "Servicing of AWTS units within 300km of Tamworth",
  "All jobs covered by Public Liability and Professional Indemnity",
  "All major brands supported",
  "Locally owned and operated since 1998",
  "Comprehensive inspection reports",
  "Parts supply to suit all installations",
  "Emergency call out available",
];
`;

  fs.writeFileSync(
    path.join(__dirname, '../src/content/services.ts'),
    content
  );
  console.log('✅ Services generated');
}

// Generate FAQ
async function generateFAQ() {
  console.log('📄 Fetching FAQ...');
  const data = await fetchSheet('151879972'); // FAQ sheet

  const faq = data.filter(row => row.question).map(row => ({
    question: row.question,
    answer: row.answer
  }));

  const content = `export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = ${JSON.stringify(faq, null, 2)};
`;

  fs.writeFileSync(
    path.join(__dirname, '../src/content/faq.ts'),
    content
  );
  console.log('✅ FAQ generated');
}

// Generate Team
async function generateTeam() {
  console.log('📄 Fetching Team...');
  const data = await fetchSheet('1250237035'); // Team sheet

  const team = data.filter(row => row.name).map(row => ({
    name: row.name,
    role: row.role,
    phone: row.phone,
    email: row.email,
    image: row.image || '/images/ben.jpg',
    bio: row.bio
  }));

  const content = `export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = ${JSON.stringify(team, null, 2)};
`;

  fs.writeFileSync(
    path.join(__dirname, '../src/content/team.ts'),
    content
  );
  console.log('✅ Team generated');
}

// Generate Pricing
async function generatePricing() {
  console.log('📄 Fetching Pricing...');
  const data = await fetchSheet('1916629172'); // Pricing sheet

  const pricing = data.filter(row => row.service).map(row => ({
    service: row.service,
    price: row.price
  }));

  const content = `export interface PricingItem {
  service: string;
  price: string;
}

export const pricing: PricingItem[] = ${JSON.stringify(pricing, null, 2)};
`;

  fs.writeFileSync(
    path.join(__dirname, '../src/content/pricing.ts'),
    content
  );
  console.log('✅ Pricing generated');
}

// Main function
async function main() {
  console.log('🚀 Fetching content from Google Sheets...\n');

  try {
    await generateSiteConfig();
    await generateServices();
    await generateFAQ();
    await generateTeam();
    await generatePricing();

    console.log('\n✨ All content files generated successfully!');
  } catch (error) {
    console.error('❌ Error fetching content:', error.message);
    process.exit(1);
  }
}

main();
