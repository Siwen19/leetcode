/**
 * @name lsw
 * @date 2020-5-2
 * @function 外观数列
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) { 
    let reg = /(\d)\1*/g; // 匹配连续出现0次  ()分组  \1表示与()内的内容要相同
    let str = '1';  
    let i = 1; 
    while (i < n) {
        str = str.replace(reg, item =>  item.length + item[0]);
        i++;
    } 
    console.log(str)
};
countAndSay(2);