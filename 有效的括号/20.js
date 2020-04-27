/**
 * @name lsw
 * @date 2020-4-27
 * @function 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let array = []
  let obj = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] != undefined) {
      array.push(s[i])
    } else if (obj[array.pop()] != s[i]) {
      console.log(false)
      return
    }
  }

  if (array.length == 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}
isValid('')
isValid('()[]')
isValid('(]')
isValid('([)]')
isValid('[{}]')
isValid('{[')
