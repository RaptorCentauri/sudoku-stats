/**
 * Will return true if all digits in the sudoku sum to 405
 * @returns {boolean}
 */
 
const hasValidTotal = function() {
	return this._sudoku.flat().reduce((a, b) => a + b) === 405
}

export default hasValidTotal