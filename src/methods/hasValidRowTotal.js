/**
 * @param {number} row - the row of the sudoku to check
 * @returns {boolean}
 */
  
const hasValidRowTotal = function(row) {
	return this._sudoku[row - 1].reduce((a, b) => a + b) === 45
}

export default hasValidRowTotal