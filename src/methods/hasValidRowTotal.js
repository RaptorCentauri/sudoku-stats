/**
 * Will return true if all digits in the given row sum to 45
 * @param {number} row - an integer representing the row number in the sudoku, from 1-9
 * @returns {boolean}
 */
  
const hasValidRowTotal = function(row) {
	return this._sudoku[row - 1].reduce((a, b) => a + b) === 45
}

export default hasValidRowTotal

