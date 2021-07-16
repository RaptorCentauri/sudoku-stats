const getColumn= function(col) {
	return this._sudoku.map((row) => row[col - 1])
}

export default getColumn