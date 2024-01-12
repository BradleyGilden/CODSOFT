# Calculator

This is CODSOFT's final Level 1 project which is a web based calculator

## Tools

* Tailwind CSS
* HTML
* Vanilla JS

## CLI - Calculator

In peperation of creating the web calculators logic, a simple terminal based nodejs calcultor was created [calc-cli.js](calc-cli.js)

N.B to use this calculator, make sure all operators/numbers are seperated by spaces 
```sh
❯ node calc-cli.js
# Please enter calculation (press Ctrl+D or enter EOF to end):
5 + 2
7
5 + 2 * 3
11
5 + - 2 * + 3    # filters operations to make it equivalent to: 5 - 2 * 3
-1
```
