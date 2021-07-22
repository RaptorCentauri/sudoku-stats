# SUDOKU-STATS

[![CircleCI](https://img.shields.io/circleci/build/github/RaptorCentauri/sudoku-stats.svg?logo=circleci&style=for-the-badge&label=build&logoColor=white)](https://circleci.com/gh/RaptorCentauri/sudoku-stats)	
[![Codecov](https://img.shields.io/codecov/c/github/RaptorCentauri/sudoku-stats.svg?logo=codecov&style=for-the-badge&label=coverage&logoColor=white)](https://codecov.io/gh/RaptorCentauri/sudoku-stats)
[![NPM](https://img.shields.io/npm/v/sudoku-stats.svg?logo=npm&style=for-the-badge&label=version&logoColor=white)](https://www.npmjs.com/package/sudoku-stats)


## Repository
The code for the project can be found here: https://github.com/RaptorCentauri/sudoku-stats


## Description
Get stats about your sudoku!


## INSTALATION
~~~ bash
npm install sudoku-stats
~~~

## TESTING
~~~ bash
npm test
~~~

## USAGE

*In this program, a sudoku is a 9x9 matrix. Each index array represents a row in the sudoku, read from left to right*

~~~ javascript
import Sudoku from 'sudoku-stats'

const sudoku = new Sudoku(sudoku)

~~~


## API

## Methods

### Sudoku.getBox(box)
*box: an integer representing the box number in the sudoku, from 1-9*

*Will return and array containing the digits in the given box of the sudoku*

~~~ javascript
sudoku.getBox(1)
~~~

### Sudoku.getColumn(col)
*col: an integer representing the column number in the sudoku, from 1-9*

*Will return and array containing the digits in the given column of the sudoku*

~~~ javascript
sudoku.getColumn(1)
~~~

### Sudoku.getRow(row)
*row: an integer representing the row number in the sudoku, from 1-9*

*Will return and array containing the digits in the given row of the sudoku*

~~~ javascript
sudoku.getRow(1)
~~~

### Sudoku.hasValidBoxTotal(box)
*box: an integer representing the box number in the sudoku, from 1-9*

*Will return true if all digits in the given box sum to 45*

~~~ javascript
sudoku.hasValidBoxTotal(1)
~~~

### Sudoku.hasValidColumnTotal(col)
*col: an integer representing the column number in the sudoku, from 1-9*

*Will return true if all digits in the given column sum to 45*

~~~ javascript
sudoku.hasValidColumnTotal(1)
~~~

### Sudoku.hasValidRowTotal(row)
*row: an integer representing the row number in the sudoku, from 1-9*

*Will return true if all digits in the given row sum to 45*

~~~ javascript
sudoku.hasValidRowTotal(1)
~~~

### Sudoku.hasValidTotal()
*Will return true if all digits in the sudoku sum to 405*

~~~ javascript
sudoku.hasValidTotal()
~~~





