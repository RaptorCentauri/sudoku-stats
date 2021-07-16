/**
 * Returns true if the sum of all numbers in the given column is 45
 * @param {Number} col - The column which we are testing
 * @returns {boolean}  - description
 */
const  hasValidColumnTotal = function(col) {
	let currentColumn = this._sudoku.map((row) => row[col - 1])
	return currentColumn.reduce((a, b) => a + b) === 45
}

export default hasValidColumnTotal