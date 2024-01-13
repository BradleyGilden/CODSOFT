

/** 
 * This script will controll all the calculator log for the web calculator
*/


document.addEventListener('DOMContentLoaded', function() {
  // equation input for calc screen
  let clist = [];
  const operators = ['/', '*', '+', '-'];
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
  });

  document.querySelector('#numpad').addEventListener('click', (e) => {
    value = e.target.dataset.value;

    // clear default content
    if (first) {
      calcScreen.textContent = '';
      mainScreen.textContent = '';
      first = false;
    }
    // append items in calcscreen
    if (value !== '=') {
      clist.push(value);
      calcScreen.textContent = clist.join('');
    }

    if (!isNaN(value) || value === '.') {
      mtext.push(value);
      mainScreen.textContent = mtext.join('');
    }
    
    if (operators.includes(value)) {
      current = mainScreen.textContent;

      // clear main screen content
      mainScreen.textContent = '';
      mtext = [];

      equation.push(current, value);
      console.log(equation);
    } else if (value === '=') {
      current = mainScreen.textContent;
      if (operators.includes(equation[equation.length - 1])) equation.push(current);
      console.log(equation);
    }
  })
})
