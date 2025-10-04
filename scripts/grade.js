
// Simple grading orchestrator for GitHub Actions
// Detect TP from PR title (expects 'TPxx: ...')
const fs = require('fs');
const path = require('path');

function parseTpFromTitle(title) {
  const m = title.match(/TP(\d{2})/i);
  return m ? m[1] : null;
}

async function run() {
  const title = process.env.PR_TITLE || '';
  const tp = parseTpFromTitle(title);

  let report = { tp, score: 0, total: 0, details: [] };

  if (tp === '04') {
    const { grade } = require('../3.TP/TP04-Algorithmique/tests/run_tests.js');
    const res = grade();
    report.score = res.score;
    report.total = res.total;
    report.details.push({ name: "TP04 tests", ...res });
  } else if (tp === '02') {
    // naive presence check for required files
    const files = [
      '3.TP/TP02-HTMLCSS/site/index.html',
      '3.TP/TP02-HTMLCSS/site/styles.css'
    ];
    let have = 0;
    for (const f of files) {
      if (fs.existsSync(f) && fs.statSync(f).size > 20) have++;
    }
    report.score = have; report.total = files.length;
    report.details.push({ name: "TP02 files presence", have, total: files.length });
  } else if (tp === '03') {
    const files = [
      '3.TP/TP03-JS-DOM/app/index.html',
      '3.TP/TP03-JS-DOM/app/app.js'
    ];
    let have = 0;
    for (const f of files) {
      if (fs.existsSync(f) && fs.statSync(f).size > 20) have++;
    }
    report.score = have; report.total = files.length;
    report.details.push({ name: "TP03 files presence", have, total: files.length });
  } else if (tp === '01') {
    const files = [
      '3.TP/TP01-GitHub/livrables.md'
    ];
    let have = 0;
    for (const f of files) {
      if (fs.existsSync(f) && fs.statSync(f).size > 20) have++;
    }
    report.score = have; report.total = files.length;
    report.details.push({ name: "TP01 files presence", have, total: files.length });
  } else {
    report.details.push({ warning: "TP not detected in PR title. Use 'TPxx: ...'" });
  }

  // Save report
  fs.writeFileSync('grades.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report));
}

run().catch(err => { console.error(err); process.exit(1); });
