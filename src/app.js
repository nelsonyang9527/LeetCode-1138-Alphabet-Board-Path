// 字母板資料集合
const alphabetBoard = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z']

// 把字母板轉成單一字元座標 ex: [a].x = 0, [a].y = 0
const alphabetPoints = []
Object.keys(alphabetBoard).map(y => {
  const xItems = Object.assign([], alphabetBoard[y])
  Object.keys(xItems).map(x => {
    alphabetPoints[xItems[x]] = { x, y }
  })
})

/**
 * 取得字串移動路徑
 *
 * @param {string} target 目標字串
 * @return {string} 路徑指令序
 */
function alphabetBoardPath (target) {
  // 目標字母轉字元陣列
  target = Object.assign([], target)

  // 結果
  let result = ''

  for (var i = 0; i <= target.length - 1; i++) {
    // 當前字母座標
    const currentX = Math.abs(alphabetPoints[target[i]].x)
    const currentY = Math.abs(alphabetPoints[target[i]].y)

    // 前一個字母座標
    const previouX = (i - 1) >= 0 ? Math.abs(alphabetPoints[target[i - 1]].x) : 0
    const previouY = (i - 1) >= 0 ? Math.abs(alphabetPoints[target[i - 1]].y) : 0

    // 座標相差
    const offsetX = currentX - previouX
    const offsetY = currentY - previouY

    // 當前X座標 > 前一個X座標: 表示右移；反之左移
    const charMoveX = (offsetX > 0 ? 'R' : 'L').repeat(Math.abs(offsetX))

    // 當前Y座標 > 前一個Y座標: 表示下移；反之上移
    const charMoveY = (offsetY > 0 ? 'D' : 'U').repeat(Math.abs(offsetY))

    // 遇到「Z」字母要顛倒路徑
    const movePath = (currentX === 0 && currentY === 5)
      ? charMoveX + charMoveY
      : charMoveY + charMoveX

    result += movePath + '!'
  }

  return result
}

console.log(`Input: leet\nOutput: ${alphabetBoardPath('leet')}`)
