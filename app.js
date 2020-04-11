
var boardArray = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z']
let x = 0
let y = 0

/**
 * 取得 字母板路徑
 * @param {string} target
 * @param {array} boardArray
 * @return {string}
 */
var alphabetBoardPath = function (target, boardArray) {
  const alphabet = Object.assign([], target)
  let xx = 0
  let yy = 0

  let result = ''
  for (var i = 0; i <= alphabet.length - 1; i++) {
    getPosition(alphabet[i], boardArray)

    if ((y - yy) === 0 && (x - xx) === 0) {
      result += '!'
      continue
    }

    result += yString(y, yy)
    result += xString(x, xx)

    xx = x
    yy = y

    result += '!'
  }

  return result
}

var xString = function (x, xx) {
  let result = ''
  for (var R = 0; R < Math.abs(x - xx); R++) {
    result += (x > xx) ? 'R' : 'L'
  }
  return result
}

var yString = function (y, yy) {
  let result = ''
  for (var D = 0; D < Math.abs(y - yy); D++) {
    result += (y > yy) ? 'D' : 'U'
  }
  return result
}

var getPosition = function (val, boardArray) {
  for (var i = 0; i < boardArray.length; i++) {
    const o = Object.assign([], boardArray[i])
    for (var j = 0; j < o.length; j++) {
      if (o[j] === val) {
        x = j
        y = i
        return true
      }
    }
  }
}

const r = alphabetBoardPath('leet', boardArray)
console.log('我的答案Output: ' + r)
console.log('正確答案Output: DDR!UURRR!!DDD!')

const rr = alphabetBoardPath('code', boardArray)
console.log('我的答案Output: ' + rr)
console.log('正確答案Output: RR!DDRR!UUL!R!')

const rrr = alphabetBoardPath('aremfzy', boardArray)
console.log('我的答案Output: ' + rrr)
console.log('正確答案Output: !DDDRR!UUURR!DDLL!ULL!DDDD!URRRR!')
