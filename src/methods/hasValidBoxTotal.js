/**
 * Will return true if all digits in the given box sum to 45
 * @param {number} box - an integer representing the box number in the sudoku, from 1-9
 * @returns {boolean}
 */

const hasValidBoxTotal= function(box) {
	const boxIndex = {
		1: 0,
		2: 3,
		3: 6,
		4: 27,
		5: 30,
		6: 33,
		7: 54,
		8: 57,
		9: 60,
	}

	const flatSudoku = this._sudoku.flat()

	const cell = boxIndex[box]

	const sumCells = (a,b)=>a+b

	let total =
		flatSudoku.slice(cell+0, cell+0+3).reduce(sumCells) +
		flatSudoku.slice(cell+9, cell+9+3).reduce(sumCells) +
		flatSudoku.slice(cell+18, cell+18+3).reduce(sumCells)
		
	return total === 45
}

export default hasValidBoxTotal
