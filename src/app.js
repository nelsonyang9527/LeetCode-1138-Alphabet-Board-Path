/**
 * 字母板
 */
class AlphabetBoard {
  /**
   * 建構子
   *
   * @param {array} boardArray 字母板資料集合
   * @memberof AlphabetBoard
   */
  constructor (boardArray) {
    // 字母板資料
    this.boardArray = boardArray
  }

  /**
   * 取得 路徑
   *
   * @param {string} target 目標字母字串
   * @return {string} 路徑指令序
   */
  GetPath (target) {
    if (target.length < 1 || target.length > 100) {
      return 'String length must be between 1 ~ 100.'
    }
    if (target.match(/[a-z]/i) === null) {
      return 'Please enter only alphabets.'
    }

    // 目標字母轉小寫
    target = target.toLowerCase()
    // 目標字母轉字元陣列
    const alphabetCharArray = Object.assign([], target)

    // 當前字母座標
    let currentX = 0
    let currentY = 0
    // 前一個字母座標
    let previouX = 0
    let previouY = 0
    // 結果
    let result = ''

    for (var i = 0; i <= alphabetCharArray.length - 1; i++) {
      // 取得 字母在字母板上的座標
      currentX = this.getCharPosition(alphabetCharArray[i], 'x')
      currentY = this.getCharPosition(alphabetCharArray[i], 'y')

      // 取得 字母移動方向
      const charMoveOfX = this.getCharMove(currentX, previouX, 'x')
      const charMoveOfY = this.getCharMove(currentY, previouY, 'y')
      // 座標若沒位移
      if (charMoveOfX === '' && charMoveOfY === '') {
        result += '!'
      } else {
        result += charMoveOfY + charMoveOfX
      }
      // 更新 前一個字母座標
      previouX = currentX
      previouY = currentY

      result += '!'
    }

    return result
  }

  /**
   * 取得 字母移動方向
   *
   * @param {number} current 當前字母座標
   * @param {number} previou 前一個字母座標
   * @param {string} position 座標方位 (X軸: x;Y軸: y)
   * @return {string} 往下一個座標的方向 (空白表示座標無移動)
   */
  getCharMove (current, previou, position) {
    let result = ''
    // 座標方向字元
    let positionChar = ''

    switch (position) {
      case 'x':
        // 當前X座標 > 前一個X座標: 表示右移；反之左移
        positionChar = (current > previou) ? 'R' : 'L'
        break
      case 'y':
        // 當前Y座標 > 前一個Y座標: 表示下移；反之上移
        positionChar = (current > previou) ? 'D' : 'U'
        break
    }

    // 計算當前座標前往下一個座標位移次數
    let count = Math.abs(current - previou)
    while (count > 0) {
      result += positionChar
      count--
    }

    return result
  }

  /**
   * 取得 字母在字母板上的座標
   *
   * @param {string} char 字母
   * @param {string} position 座標方位 (X軸: x;Y軸: y)
   * @returns {number} 座標
   */
  getCharPosition (char, position) {
    for (var y = 0; y < this.boardArray.length; y++) {
      // 字母板 i 列拆解 char 陣列
      const boardCharArray = Object.assign([], this.boardArray[y])
      const x = boardCharArray.indexOf(char)
      if (x >= 0) {
        switch (position) {
          case 'x':
            return x
          case 'y':
            return y
        }
      }
    }
    return 0
  }
}

const boardArray = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z']
const alphabetBoard = new AlphabetBoard(boardArray)

console.log('我的答案Output: ' + alphabetBoard.GetPath('code'))
console.log('正確答案Output: RR!DDRR!UUL!R!')

console.log('我的答案Output: ' + alphabetBoard.GetPath('aremfzy'))
console.log('正確答案Output: !!DDDRR!UUURR!DDLL!ULL!DDDD!URRRR!')
