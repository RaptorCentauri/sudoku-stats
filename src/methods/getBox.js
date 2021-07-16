const getBox = function(box){
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

export default getBox