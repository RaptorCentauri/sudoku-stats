/**
 * Will return true if all digits in the given column sum to 45
 * @param {number} col - an integer representing the column number in the sudoku, from 1-9
 * @returns {boolean}
 */
 
const  hasValidColumnTotal = function(col) {
	let currentColumn = this._sudoku.map((row) => row[col - 1])
	return currentColumn.reduce((a, b) => a + b) === 45
}

export default hasValidColumnTotal

