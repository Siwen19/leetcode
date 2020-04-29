/**
 * @name lsw
 * @date 2020-4-26
 * @function 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
let arr = []
var longestCommonPrefix = function (strs) {
  // 判断 数组第一个字符串是不是空
  // 判断 是不是空数组 
  if (strs[0] == '') {
    console.log('')
    return
  }

  if (strs.length <= 1) {
    console.log(strs.join(''))
    return
  }

  cal(0, 0, strs) 
  const arrLength = arr.length == 0 ? '' : arr.reverse().join('')
  arr = []
  console.log(arrLength)
}

function cal (i, j, strs) {
  const strLength = strs.map((ele) => ele.length)
  const minLength = Math.min(...strLength)
  if (j >= minLength) return
  let temp = strs[i].charAt(j)

  for (let k = 1; k < strs.length; k++) {
    if (strs[k].charAt(j) !== temp) {
      return
    }
  }
  cal(i, j + 1, strs)
  arr.push(temp)
}

longestCommonPrefix(['clower', 'flow', 'flight'])
longestCommonPrefix(['flower', 'flo', 'flight'])
longestCommonPrefix(['a'])
longestCommonPrefix(['dog', 'racecar', 'car'])
longestCommonPrefix([])
longestCommonPrefix(['c', 'c'])
longestCommonPrefix(['', '', 'aaa', 'mmm'])
longestCommonPrefix(['aaa', ''])
