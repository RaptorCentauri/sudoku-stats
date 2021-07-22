import Sudoku from '../src/sudoku.js'
import sampleSudoku from './sampleSudoku.js'

const goodSudoku = new Sudoku(sampleSudoku.valid)
const badSudoku = new Sudoku(sampleSudoku.invalid)


describe('getRow', function () {
	test('should return an array of the requested row', () => {
		const expectedRow = [7, 8, 2, 6, 1, 3, 9, 5, 4]
		expect(goodSudoku.getRow(3)).toEqual(expectedRow)
	})	
})

describe('getColumn', function () {
	test('should return an array of the requested column', () => {
		const expectedColumn = [9, 1, 2, 8, 5,7, 6, 3, 4]
		expect(goodSudoku.getColumn(3)).toEqual(expectedColumn)
	})	
})

describe('getBox', function () {
	test('should return an array of the requested box', () => {
		const expectedBox = [4, 6, 7, 9, 8, 2, 1, 3, 5]		
		expect(goodSudoku.getBox(5)).toEqual(expectedBox)
	})	
})
describe('hasValidTotal', function () {
		test('should return true if the sum of all cells is 405', () => {
			expect(goodSudoku.hasValidTotal()).toBeTruthy()
		})
		test('should return false if the sum of all cells is not 405', () => {
			expect(badSudoku.hasValidTotal()).toBeFalsy()
		})		
})

describe('hasValidRowTotal', function () {
	test('should return true if the sum of the given row is 45', () => {
		expect(goodSudoku.hasValidRowTotal(1)).toBeTruthy()
	})
	test('should return false if the sum of the given row is not 45', () => {
		expect(badSudoku.hasValidRowTotal(1)).toBeFalsy()
	})		
})

describe('hasValidColumnTotal', function () {
	test('should return true if the sum of the given column is 45', () => {
		expect(goodSudoku.hasValidColumnTotal(9)).toBeTruthy()
	})
	test('should return false if the sum of the given column is not 45', () => {
		expect(badSudoku.hasValidColumnTotal(9)).toBeFalsy()
	})		
})

describe('hasValidBoxTotal', function () {
	test('should return true if the sum of the given box is 45', () => {
		expect(goodSudoku.hasValidBoxTotal(1)).toBeTruthy()
	})
	test('should return false if the sum of the given box is not 45', () => {
		expect(badSudoku.hasValidBoxTotal(1)).toBeFalsy()
	})		
})