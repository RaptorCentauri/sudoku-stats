const getRow= function(row) {
	try {
		if(row > 9){
			throw new Error('This wack yo')
		}
		
		return this._sudoku[row - 1]	
	} catch (error) {
		console.error(error)
	}
	

}

export default getRow