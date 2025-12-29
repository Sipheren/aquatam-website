# Google Sheets CMS Setup

## 1. Create Your Google Sheet

Create a new Google Sheet with the following tabs (sheets):

### Sheet 1: Site Config (gid=0)
| key | value |
|-----|-------|
| name | Aquatam Waste Water |
| tagline | Professional AWTS Services Since 1998 |
| description | Aquatam provides expert maintenance and servicing of Aerated Wastewater Treatment Systems (AWTS) within a 300km radius of Tamworth, NSW. |
| phone | 0438 603 852 |
| email | ben@aquatam.com.au |
| location | Tamworth, NSW |
| serviceRadius | 300km |
| foundedYear | 1998 |
| coverageAreas | Tamworth, Gunnedah, Narrabri, Wee Waa, Coonabarabran, Inverell, Moree, Armidale |
| supportedBrands | Taylex, BioCycle, BioSeptic, Earthsafe, Krystal Kleer, Ozzie Kleen, Aquanova, Garden Master |

### Sheet 2: Services (gid=1)
| title | description | icon | link |
|-------|-------------|------|------|
| AWTS Servicing | Regular maintenance services to keep your system running efficiently. 90-day service intervals as per NSW requirements. | wrench | /services |
| System Repairs | Expert diagnosis and repair of all AWTS units. Fast response times and quality parts. | tool | /services |
| New Installations | Professional installation of new AWTS systems. Full site assessment and council compliance. | home | /installs |
| System Inspections | Comprehensive inspections for council compliance, property sales, or peace of mind. | clipboard | /services |

### Sheet 3: FAQ (gid=2)
| question | answer |
|----------|--------|
| How often should my AWTS be serviced? | Your AWTS should be serviced every 3 months (90 days) as per NSW requirements. Regular servicing ensures optimal performance and prevents costly repairs. |
| What areas do you service? | We service all AWTS units within a 300km radius of Tamworth, including Gunnedah, Narrabri, Armidale, Moree, and surrounding areas. |
| What brands do you service? | We service all major AWTS brands including Taylex, BioCycle, BioSeptic, Earthsafe, Krystal Kleer, Ozzie Kleen, Aquanova, and Garden Master. |

### Sheet 4: Team (gid=3)
| name | role | phone | email | image | bio |
|------|------|-------|-------|-------|-----|
| Ben Glover | Service Tech, Repairs, Quotes & Installs | 0438 603 852 | ben@aquatam.com.au | /images/ben.jpg | Expert technician specializing in AWTS servicing, repairs, installations, and quotes. |

### Sheet 5: Pricing (gid=4)
| service | price |
|---------|-------|
| Regular 90-Day Service | From $85 |
| System Repairs | Quote on inspection |
| New Installation Quote | Free |
| Compliance Inspection | Contact for pricing |

## 2. Publish Your Sheet

1. In Google Sheets, go to **File → Share → Publish to web**
2. Select **Entire Document**
3. Choose **Comma-separated values (.csv)**
4. Click **Publish**
5. Copy the Sheet ID from the URL (between `/d/` and `/edit`)

Example URL:
```
https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit
```
Sheet ID: `1ABC123XYZ456`

## 3. Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

- **GOOGLE_SHEET_ID**: Your Google Sheet ID (from step 2)
- **SSH_PRIVATE_KEY**: Your SSH private key for server access
- **REMOTE_HOST**: Your server IP or domain
- **REMOTE_USER**: Your SSH username (e.g., `david`)

## 4. How It Works

1. **Daily at 2 AM**: GitHub Actions automatically:
   - Fetches latest data from Google Sheets
   - Generates content files
   - Builds the site
   - Deploys to your server

2. **Manual Trigger**: Go to Actions tab → Build and Deploy → Run workflow

3. **Your Mate Edits**: Ben can edit the Google Sheet anytime, changes go live next day automatically!

## 5. Testing Locally

To test the Google Sheets fetch locally:

```bash
export GOOGLE_SHEET_ID="your_sheet_id_here"
npm run fetch-content
npm run build
```

## Notes

- Changes in Google Sheets go live the next day (2 AM UTC)
- For urgent updates, manually trigger the workflow in GitHub
- Keep the Google Sheet published publicly (read-only)
- Never put sensitive data in the sheet (it's public!)
