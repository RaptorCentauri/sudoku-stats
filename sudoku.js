class Sudoku {
	constructor(sudoku) {
		this._sudoku = sudoku
	}

	hasValidTotal() {
		return this._sudoku.flat().reduce((a, b) => a + b) === 405
	}

	hasValidRowTotal(row) {
		return this._sudoku[row - 1].reduce((a, b) => a + b) === 45
	}

	hasValidColumnTotal(col) {
		let currentColumn = this._sudoku.map((row) => row[col - 1])
		return currentColumn.reduce((a, b) => a + b) === 45
	}

	hasValidBoxTotal(box) {
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

	getRow(row) {
		return this._sudoku[row - 1]
	}
  
	getColumn(col) {
		return this._sudoku.map((row) => row[col - 1])
	}
  
  getBox(box){
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
    
    let currentBox =[
    flatSudoku.slice(cell+0, cell+0+3),
    flatSudoku.slice(cell+9, cell+9+3),
    flatSudoku.slice(cell+18, cell+18+3)
    ].flat()
    
    return currentBox
  }
}


export default Sudoku