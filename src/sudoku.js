import * as index from './methods/index.js'

class Sudoku {
	constructor(sudoku) {
		this._sudoku = sudoku
	}
	
	hasValidTotal = index.hasValidTotal
	hasValidRowTotal = index.hasValidRowTotal
	hasValidColumnTotal = index.hasValidColumnTotal
	hasValidBoxTotal = index.hasValidBoxTotal
	getRow = index.getRow
	getColumn = index.getColumn
	getBox = index.getBox
	
}


export default Sudoku


