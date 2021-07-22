/**
 * Will return and array containing the digits in the given row of the sudoku
 *
 * @param {number} row - an integer representing the row number in the sudoku, from 1-9
 * @returns {number[]}
 */

const getRow= function(row) {
	try {
		if(row > 9){
			throw new Error(`Row out of bounds`)
		}
		
		return this._sudoku[row - 1]	
	} catch (error) {
		console.error(error)
	}
	

}

export default getRow

