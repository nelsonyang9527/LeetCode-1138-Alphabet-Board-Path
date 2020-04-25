# LeetCode-1138-Alphabet-Board-Path
字母板上的路徑, Leetcode assignment:
https://leetcode.com/problems/alphabet-board-path/

## Question

從一塊字母板上的位置(0,0)出發, 該座標對應的字元為board[0][0].

本題目字母板:
```
const board = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z']
```

![azboard](https://assets.leetcode.com/uploads/2019/07/28/azboard.png)

Following moves:
* 如果字元存在字母板中，「U」表示座標上移一列
* 如果字元存在字母板中，「D」表示座標下移一列
* 如果字元存在字母板中，「L」表示座標左移一欄
* 如果字元存在字母板中，「R」表示座標右移一欄
* 如果字元在當前座標中，「!」表示座標無移動

Note:
* 字元要確實存在字母板座標中
* 回傳的指令動作，以最小移動數量為目標

Example 1:
```
Input: target = "leet"
Output: "DDR!UURRR!!DDD!"
```

Example 2:
```
Input: target = "code"
Output: "RR!DDRR!UUL!R!"
```

Constraints:
* 1 <= target.length <= 100
* target 僅包含小寫英文字母

## Solution

Testing
```
cd /src/
node app.js
```

Result
```
Input: leet
Output: DDR!UURRR!!DDD!
Input: code
Output: RR!DDRR!UUL!R!
Input: aaa
Output: !!!
Input: ayz
Output: DDDDRRRR!LLLLD!URRRR!LLLLD!
```