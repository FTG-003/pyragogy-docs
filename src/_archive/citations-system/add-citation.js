#!/usr/bin/env node

/**
 * Helper script to create new citation files
 * Usage: node scripts/add-citation.js "Title" "Quote" "Author1, Author2" "Source" "tag1,tag2"
 */

const fs = require('fs');
const path = require('path');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function createCitationFile(title, quote, authors, source, tags) {
  const slug = slugify(title);
  const filename = `${slug}.md`;
  const filepath = path.join(__dirname, '../src/content/citations', filename);
  
  const authorArray = authors.split(',').map(a => a.trim());
  const tagArray = tags.split(',').map(t => t.trim());
  
  const content = `---
title: "${title}"
quote: "${quote}"
authors: ${JSON.stringify(authorArray)}
source: "${source}"
doi: ""  # Optional: Add DOI if available
url: ""  # Optional: Add URL if no DOI
tags: ${JSON.stringify(tagArray)}
year: ${new Date().getFullYear()}
publicationType: "journal"  # journal, conference, book, report, blog, news
verified: false  # Set to true if DOI is verified
---

Add any additional notes or context about this citation here.
`;

  fs.writeFileSync(filepath, content);
  console.log(`✅ Created citation file: ${filename}`);
  console.log(`📁 Location: ${filepath}`);
  console.log('\n📝 Next steps:');
  console.log('1. Edit the file to add DOI/URL if available');
  console.log('2. Set verified: true if DOI is confirmed');
  console.log('3. Update publicationType if needed');
  console.log('4. Add any additional notes in the body');
}

// Check if running directly
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 5) {
    console.log('Usage: node scripts/add-citation.js "Title" "Quote" "Author1, Author2" "Source" "tag1,tag2"');
    console.log('\nExample:');
    console.log('node scripts/add-citation.js "AI in Education" "This is a quote about AI in education" "Dr. Smith, Prof. Jones" "Journal of Ed Tech" "AI,Education,Technology"');
    process.exit(1);
  }
  
  const [title, quote, authors, source, tags] = args;
  createCitationFile(title, quote, authors, source, tags);
}

module.exports = { createCitationFile, slugify }; 