import * as index from './methods/index.js'
import handler from './handler/handler.js'

class Sudoku {
	constructor(sudoku) {
		this._sudoku = sudoku
		return new Proxy(this, handler)
	}
	
	sayHi(){
		console.log('HI!')
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


