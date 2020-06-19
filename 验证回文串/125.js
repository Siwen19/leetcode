var isPalindrome = function(s) {
    let reg = /[^a-zA-Z0-9]/g;
    let arr = s.replace(reg, '').toLowerCase();
    // reverse() 会改变 原数组
    let reverseArr = arr.split('').reverse().join('');
    return (arr === reverseArr);
}; 
