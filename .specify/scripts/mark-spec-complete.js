
const fs = require('fs');
const path = require('path');

const specFilePath = process.argv[2];

if (!specFilePath) {
    console.error('Usage: node mark-spec-complete.js <path-to-spec.md>');
    process.exit(1);
}

const absolutePath = path.resolve(specFilePath);

if (!fs.existsSync(absolutePath)) {
    console.error(`Error: File not found at ${absolutePath}`);
    process.exit(1);
}

let content = fs.readFileSync(absolutePath, 'utf8');

// Replace Status field
content = content.replace(/\nStatus: (Draft|In Progress)/, '\nStatus: Complete');

fs.writeFileSync(absolutePath, content, 'utf8');

console.log(`Successfully marked '${specFilePath}' as Complete.`);
