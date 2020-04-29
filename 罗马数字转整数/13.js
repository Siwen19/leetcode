/**
 * @name lsw
 * @date 2020-4-24
 * @function 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var reg = /IV|IX|XL|XC|CD|CM/g
  var picStr = s.match(reg) 
  var notNull = picStr != null ? true : false
  var sum = 0
  var remain = s.replace(reg, '') 

  if (notNull) {
    for (let i = 0; i < picStr.length; i++) {
      switch (picStr[i]) {
        case 'IV':
          sum += 4
          break
        case 'IX':
          sum += 9
          break
        case 'XL':
          sum += 40
          break
        case 'XC':
          sum += 90
          break
        case 'CD':
          sum += 400
          break
        case 'CM':
          sum += 900
          break
      }
    }
  }  

  for (let j = 0; j < remain.length; j++) { 
    switch (remain.charAt(j)) {
      case 'I':
        sum += 1; 
        break
      case 'V':
        sum += 5;
        break
      case 'X':
        sum += 10;
        break
      case 'L':
        sum += 50
        break
      case 'C':
        sum += 100
        break
      case 'D':
        sum += 500
        break
      case 'M':
        sum += 1000
        break
    }
  }

  console.log(sum)
}

romanToInt('MCMXCIV')
