
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const specsDir = path.resolve(__dirname, '../../specs');

async function generateSpecReport() {
    console.log('Generating consolidated spec report...');
    const specFiles = glob.sync(`${specsDir}/*/spec.md`);

    const report = [];

    for (const filePath of specFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const fileName = path.basename(filePath);
        const featureName = path.basename(path.dirname(filePath));

        const statusMatch = content.match(/\n\*\*Status\*\*: (.+)/);
        const status = statusMatch ? statusMatch[1].trim() : 'N/A';

        const clarificationMatches = content.match(/\[NEEDS CLARIFICATION\]/g);
        const clarifications = clarificationMatches ? clarificationMatches.length : 0;

        report.push({
            path: `specs/${featureName}/${fileName}`,
            status,
            clarifications: clarifications > 0 ? `${clarifications} needed` : 'None',
        });
    }

    console.log('\n--- Consolidated Spec Report ---');
    if (report.length === 0) {
        console.log('No spec files found.');
    } else {
        report.forEach(spec => {
            console.log(`\nFile: ${spec.path}`);
            console.log(`  Status: ${spec.status}`);
            console.log(`  Clarifications: ${spec.clarifications}`);
        });
    }
    console.log('------------------------------\n');
}

generateSpecReport();
