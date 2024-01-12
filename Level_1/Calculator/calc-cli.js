#!/usr/bin/env node

/**
 * calc-cli - The cli based version of the web calculator in nodejs
 */

process.stdin.setEncoding('utf8');

console.log('Please enter calculation (press Ctrl+D or enter EOF to end):');

// continuosly read input from stdin
process.stdin.on('data', function (data) {
  // remove white spaces and newlines at the ends
  let calculation = data.trim();

  if (calculation === 'exit' || calculation === 'EOF') {
    process.stdin.emit('end');
  }
  calculation = calculation.split(/\s+/);
  console.log(calculation)
  calculation = cleanup(calculation);
  console.log(calculation);
  calculation = filterOperations(calculation);
  console.log(calculation)
});

process.stdin.on('end', function () {
  console.log('Good Bye !!! :)');
});

/* 
 * cleanup - cleans up equation by converting the strings to ints and floats and
 * removes excess operators at the ends
 * Returns: list of int/float operands with trailing operations removed
 */
function cleanup(calculation) {
  let calc = calculation;
  let opcount = 0;
  const ignore = ['*', '+', '/', '-'];
  try {
    for (let i = 0; i < calc.length; i++) {
      // keep track on number of operations encountered so we can remove them later if theres excess
      if (ignore.includes(calc[i])) {
        opcount += 1;
      } else {
        opcount = 0;
      }
      // if a number is preceeded by a '-', make it negative
      if (calc[i] === '-' && !isNaN(calc[i + 1]) && isNaN(calc[i - 1])) {
        if (calc[i + 1].includes('.')) {
          calc.splice(i, 2, parseFloat(`-${calc[i + 1]}`));
        } else {
          calc.splice(i, 2, parseInt(`-${calc[i + 1]}`));
        }
        opcount = 0;
      } else if ((ignore.includes(calc[i])) && i === 0 ) { // removes excess operators at start
        calc.splice(i, 1);
        // go back to first index and try again
        i--;
      } else if ((ignore.includes(calc[i])) && i === calc.length - 1 ) { // removes excess operators at the end
        calc.splice(i - opcount + 1, opcount);
        break;
      } else if (!isNaN(calc[i])) {
        if (calc[i].includes('.')) {
          calc[i] = parseFloat(calc[i]);
        } else {
          calc[i] = parseInt(calc[i]);
        }
      } else if (isNaN(calc[i]) && !ignore.includes(calc[i])) { // handle invalid inputs
        throw new Error('Incorrect type');
      }
    }
  } catch (err) {
    console.log(err.message);
    calc = [];
  } finally {
    return calc
  }
}

/**
 * filterOperations - if operations are entered in succession this function will determine the operations
 * that take the most precidence
 * precidence order= *, /, +, -
 * Returns: list of operands and filtered operations
 */
function filterOperations(calculation) {
  let operatorCount = 0;
  let highest = null;
  let calc = calculation;
  const operators = ['-', '+', '/', '*'];

  for (let i = 0; i < calc.length; i++) {
    if (operators.includes(calc[i])) {
      operatorCount++;
      highest = operators.indexOf(calc[i]) > operators.indexOf(highest) ? calc[i]: highest;
    } else {
      operatorCount = 0;
      highest = null;
    }
    if (highest && operatorCount > 1 && !isNaN(calc[i + 1])) {
      calc.splice(i - operatorCount + 1, operatorCount, highest);
      // reset operator count since a number is encountered next
      operatorCount = 0;
    }
  }
  return calc;
}
