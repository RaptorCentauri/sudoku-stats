/**
 * Returns true if the sum of all numbers in Sudoku equal 405
 * @returns {boolean}  - description
 */
 
const hasValidTotal = function() {
	return this._sudoku.flat().reduce((a, b) => a + b) === 405
}

export default hasValidTotal