/**
 * @name lsw
 * @date 2020-4-22
 * @function 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const str = Math.abs(x).toString()
  let num = 0
  const isPositive = x > 0 ? true : false
  const array = []

  if (str.length > 1) {
    for (let i = str.length - 1; i >= 0; i--) {
      array.push(str.charAt(i))
      if (array[0] == '0') array.pop(array[0])
    }
    num = isPositive == true ? array.join('') : -array.join('')
    console.log((num < -Math.pow(2, 31)) || (num > (Math.pow(2, 31) - 1)) ? 0 : num)
  } else {
    console.log(str)
  }
}

reverse(106900)
