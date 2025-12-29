# Easy Content Editing Guide

This guide explains how to edit your website content without any coding knowledge.

## What You Can Edit

All website content is stored in simple text files in the `src/content/` folder. You can edit:
- Company information and contact details
- Services and pricing
- FAQ questions and answers
- Team member information
- Service area locations

## How to Edit Content

### Step 1: Find the Right File

All content files are in the `src/content/` folder:

| What to Change | File to Edit |
|----------------|--------------|
| Company name, phone, email, service areas | `siteConfig.ts` |
| Services list and pricing | `services.ts` |
| FAQ questions and answers | `faq.ts` |
| Team member information | `team.ts` |
| Installation photos | `gallery.ts` |

### Step 2: Open the File

You can edit these files with:
- **VS Code** (recommended - free from [code.visualstudio.com](https://code.visualstudio.com))
- **Notepad** (Windows)
- **TextEdit** (Mac - use Plain Text mode)
- Any text editor

### Step 3: Make Your Changes

Keep the same format as the existing text. Here are examples:

## Common Editing Tasks

### Change Phone Numbers or Emails

**File:** `src/content/siteConfig.ts`

Find this section:
```typescript
phone: {
  ben: "0438 603 852",
  peter: "0418 280 592",
},
email: {
  ben: "ben@aquatam.com.au",
  peter: "pete@aquatam.com.au",
},
```

Just change the text between the quotes `"like this"`.

### Add or Remove Service Areas

**File:** `src/content/siteConfig.ts`

Find the `coverageAreas` section:
```typescript
coverageAreas: [
  "Tamworth",
  "Gunnedah",
  "Narrabri",
  // Add new areas here
],
```

To add a new area:
```typescript
coverageAreas: [
  "Tamworth",
  "Gunnedah",
  "Narrabri",
  "New Town",  // <-- Add like this (don't forget the comma!)
],
```

### Change Service Pricing

**File:** `src/content/services.ts`

Find the service you want to change:
```typescript
{
  id: "servicing",
  title: "AWTS Servicing",
  description: "Regular maintenance services...",
  price: "From $85",  // <-- Change this
  icon: "wrench",
},
```

### Add a New FAQ Question

**File:** `src/content/faq.ts`

Add a new question at the end (before the last `]`):
```typescript
export const faqs: FAQ[] = [
  // ... existing questions ...
  {
    question: "Your new question here?",
    answer: "Your answer here.",
  },
];
```

### Update Team Member Information

**File:** `src/content/team.ts`

Change any team member details:
```typescript
{
  name: "Ben Glover",
  role: "Service Tech & Repairs",
  phone: "0438 603 852",
  email: "ben@aquatam.com.au",
  image: "/images/ben.jpg",
  bio: "Expert technician specializing in AWTS servicing and repairs.",
},
```

### Add Installation Photos

**File:** `src/content/gallery.ts`

1. First, add your photo to `public/images/gallery/`
2. Then add it to the list:
```typescript
{
  src: "/images/gallery/your-photo.jpg",
  alt: "Description of photo",
  caption: "What to show when hovering",
},
```

## Important Rules

1. **Always keep the same format** - don't remove quotes `" "` or commas `,`
2. **Keep commas** between items (but not after the last item)
3. **Don't change the words** before the colon `:` (like `name:`, `phone:`)
4. **Save the file** when you're done
5. **Test your changes** (see below)

## Testing Your Changes

After editing:

1. Open Terminal/Command Prompt
2. Navigate to your project folder
3. Run: `npm run dev`
4. Open your browser to `http://localhost:3000`
5. Check your changes look correct

## Common Mistakes

### Missing Comma
❌ Wrong:
```typescript
coverageAreas: [
  "Tamworth"   // Missing comma!
  "Gunnedah",
],
```

✅ Correct:
```typescript
coverageAreas: [
  "Tamworth",  // Has comma
  "Gunnedah",
],
```

### Missing Quote
❌ Wrong:
```typescript
name: "Ben Glover,  // Missing closing quote
```

✅ Correct:
```typescript
name: "Ben Glover",
```

### Extra Comma at End
❌ Wrong:
```typescript
coverageAreas: [
  "Tamworth",
  "Gunnedah",  // Last item should not have comma
],
```

✅ Correct:
```typescript
coverageAreas: [
  "Tamworth",
  "Gunnedah"   // No comma on last item
],
```

## After Making Changes

Once you've edited your content:

1. **Save all files**
2. **Test locally** with `npm run dev`
3. **Build the site** with `npm run build`
4. **Deploy** (see DEPLOYMENT.md)

## Getting Help

If something breaks:
1. Check you didn't remove any `"`, `,`, or `{}`
2. Compare your changes to the original format
3. Run `npm run build` to see error messages
4. Contact your developer if you can't fix it

## Quick Reference

| Symbol | Purpose | Example |
|--------|---------|---------|
| `" "` | Text content | `"Tamworth"` |
| `,` | Separates items | `"Tamworth", "Gunnedah"` |
| `:` | Links label to value | `name: "Ben"` |
| `{ }` | Groups related info | `{ name: "Ben", phone: "0438..." }` |
| `[ ]` | Lists of items | `["Tamworth", "Gunnedah"]` |
| `//` | Comment (ignored) | `// This is a note` |

## Tips

- Make small changes and test often
- Keep a backup copy before making big changes
- Use the same formatting as existing entries
- Check your spelling and phone numbers
- Test the contact form after changing emails

Remember: You can always undo changes by reverting to the original file!
