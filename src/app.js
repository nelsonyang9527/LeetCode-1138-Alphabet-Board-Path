var AlphabetBoard = require('./AlphabetBoard')

// 字母板資料集合
const boardArray = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z']
const alphabetBoard = new AlphabetBoard(boardArray)

console.log('Input: leet')
console.log('Output: ' + alphabetBoard.GetPath('leet'))

console.log('Input: code')
console.log('Output: ' + alphabetBoard.GetPath('code'))
