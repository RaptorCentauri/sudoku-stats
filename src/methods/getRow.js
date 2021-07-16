const getRow= function(row) {
	try {
		if(row > 9){
			throw new Error('Row out of bounds')
		}
		
		return this._sudoku[row - 1]	
	} catch (error) {
		console.error(error)
	}
	

}

export default getRow