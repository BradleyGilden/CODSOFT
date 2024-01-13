/** 
 * This script will controll all the calculator log for the web calculator
*/

document.addEventListener('DOMContentLoaded', function() {
  const calcScreen = document.querySelector('#c-screen');
  const mainScreen = document.querySelector('#m-screen');

  // clearing the screens
  document.querySelector('#clear').addEventListener('click', () => {
    calcScreen.textContent = '';
    mainScreen.textContent = '0';
  });
})
