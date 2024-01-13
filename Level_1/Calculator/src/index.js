/** 
 * This script will controll all the calculator log for the web calculator
*/

document.addEventListener('DOMContentLoaded', function() {
  // equation input for calc screen
  let clist = [];
  const operators = ['/', '*', '+', '-'];
  let equated = false;
  let equation = [];
  let first = true;
  let mtext = [];
  let current;
  let value;
  const calcScreen = document.querySelector('#c-screen');
  const mainScreen = document.querySelector('#m-screen');

  // clearing the screens
  document.querySelector('#clear').addEventListener('click', () => {
    clist = [];
    mtext = [];
    equation = [];
    mainScreen.textContent = '';
  });

  document.querySelector('#numpad').addEventListener('click', (e) => {
    value = e.target.dataset.value;

    // remove current error
    if (mainScreen.textContent === 'Invalid Input!!!') {
      mainScreen.textContent = '';
      mainScreen.style.color = '#f1f1f1';
    }

    // clear default content
    if (first) {
      calcScreen.textContent = '';
      mainScreen.textContent = '';
      first = false;
    }
    // append items in calcscreen
    if (value !== '=') {
      equated ? clist = [value]: clist.push(value);
      calcScreen.textContent = clist.join('');
    }

    if (!isNaN(value) || value === '.') {
      // if a person has already pressed the equal to sign, then goes for a number,
      // break the chan and display that number only
      if (equated) {
        mtext = [value];
      } else {
        mtext.push(value);
      }
      mainScreen.textContent = mtext.join('');
      equated = false;
    }
    
    if (operators.includes(value)) {
      console.log('from operators', equation);
      current = mainScreen.textContent;

      // clear main screen content
      mainScreen.textContent = '';
      mtext = [];

      equation.push(current, value);
      console.log('from operators', equation);
    } else if (value === '=') {
      let result;
      current = mainScreen.textContent;
      if (operators.includes(equation[equation.length - 1])) equation.push(current);
      result = getResult(equation);
      // in case of an error
      if (result === '' && equation.length !== 0) {
        mainScreen.textContent = 'Invalid Input!!!';
        mainScreen.style.color = 'red';
      } else {
        mainScreen.textContent = result.toString();
      }
      clist = [result];
      equation = [];
      calcScreen.textContent = result;
      equated = true;
    }
  })
})



/**
 * getResult - gets the final calculation result using many processing functions
 * @param {list} calc_list 
 * @returns and int | float result
 */
function getResult(calc_list) {
  let calculation = calc_list.filter(item => item !== '');
  calculation = cleanup(calculation);
  calculation = filterOperations(calculation);
  calculation = bodmas(calculation);
  return calculation;
}

/* 
 * cleanup - cleans up equation by converting the strings to ints and floats and
 * removes excess operators at the ends
 * Returns: list of int/float operands with trailing operations removed
 */
function cleanup(calculation) {
  let calc = calculation;
  let opCount = 0;
  const ignore = ['*', '+', '/', '-'];
  try {
    for (let i = 0; i < calc.length; i++) {
      // keep track on number of operations encountered so we can remove them later if theres excess
      if (ignore.includes(calc[i])) {
        opCount += 1;
      } else {
        opCount = 0;
      }
      // if a number is preceeded by a '-', make it negative
      if (calc[i] === '-' && !isNaN(calc[i + 1]) && isNaN(calc[i - 1])) {
        if (calc[i + 1].includes('.')) {
          calc.splice(i, 2, parseFloat(`-${calc[i + 1]}`));
        } else {
          calc.splice(i, 2, parseInt(`-${calc[i + 1]}`));
        }
        opCount = 0;
      } else if ((ignore.includes(calc[i])) && i === 0 ) { // removes excess operators at start
        calc.splice(i, 1);
        // go back to first index and try again
        i--;
      } else if ((ignore.includes(calc[i])) && i === calc.length - 1 ) { // removes excess operators at the end
        calc.splice(i - opCount + 1, opCount);
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
 * precidence order= /, *, +, -
 * Returns: list of operands and filtered operations
 */
function filterOperations(calculation) {
  let opCount = 0;
  let highest = null;
  let calc = calculation;
  const operators = ['-', '+', '*', '/'];

  for (let i = 0; i < calc.length; i++) {
    if (operators.includes(calc[i])) {
      opCount++;
      // find operator of highest precidence for current consecutive sequence of operators
      highest = operators.indexOf(calc[i]) > operators.indexOf(highest) ? calc[i]: highest;
    } else {
      opCount = 0;
      highest = null;
    }
    if (highest && opCount > 1 && !isNaN(calc[i + 1])) {
      calc.splice(i - opCount + 1, opCount, highest);
      // reset operator count since a number is encountered next
      opCount = 0;
      highest = null;
    }
  }
  return calc;
}

/**
 * calculate - perform basic calculations
 * @param {int | float} n1  - first operand
 * @param {String} operation  - operation [+ , * , -, /]
 * @param {int | float} n2 - second operand
 */
function calculate(n1, operation, n2) {
  switch (operation) {
    case '-':
      return n1 - n2;
    case '+':
      return n1 + n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    }
}

/**
 * bodmas - performs calculations in order of basic bodmas operations
 */
function bodmas(calculation) {
  const operations = ['/', '*', '+', '-']
  let calc = calculation;

  if (calc.length === 0) return '';
  // in order of bodmas operations
  for (let j of operations) {
    for (let i = 0; i < calc.length && calc.includes(j); i++) {
      // if current index contains current operation
      if (calc[i] === j) {
        calc.splice(i - 1, 3, calculate(calc[i - 1], calc[i], calc[i + 1]))
        // iterate back as to not miss the next operation
        i --;
      }
    }
  }
  return calc[0];
}
