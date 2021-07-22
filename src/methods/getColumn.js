/**
 * Will return and array containing the digits in the given column of the sudoku
 *
 * @param {number} col - an integer representing the column number in the sudoku, from 1-9
* @returns {number[]}
 */

const getColumn= function(col) {
	return this._sudoku.map((row) => row[col - 1])
}

export default getColumn