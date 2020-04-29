/**
 * @name lsw
 * @date 2020-4-23
 * @function 回文数
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) { 
//     // 法1:
//     var isPositive = x >= 0 ? true:false; 
//     var input = x;
//     var digit = 0; 
//         reverse = 0;
    
//     while (input > 0) { 
//         digit = input % 10; 
//         reverse = reverse*10 + digit;
//         input = Math.floor(input / 10);
//     }    
    
//     if(isPositive == false || reverse != x) {
//         console.log(false); 
//     } else {
//         console.log(true);
//     }  
// };

var isPalindrome = function(x) {
    // 法2:二分树查找法
    let str = x.toString();
    let flag = true;  
    for (let i=1, len = str.length; i<=Math.floor(len/2); i++) {
        if (str.charAt(i-1) != str.charAt(len-i)) {
            flag = false;
            break; 
        }
    }
    console.log(flag);
}

isPalindrome(0);
