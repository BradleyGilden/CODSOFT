#!/usr/bin/env node

/**
 * calc-cli - The cli based version of the web calculator in nodejs
 */

process.stdin.setEncoding('utf8');

console.log('Please enter calculation (press Ctrl+D or enter EOF to end):');

process.stdin.on('data', function (data) {
  let calculation = data.trim();

  if (calculation === 'exit' || calculation === 'EOF') {
    process.stdin.emit('end');
  }
  calculation = calculation.split(/\s+/);
  calculation = calculation.join('');
  calculation = calculation.split('');
  console.log(calculation);
});

process.stdin.on('end', function () {
  console.log('Good Bye !!! :)');
});

function filterNumArray() {
  // for filtering nums
}
