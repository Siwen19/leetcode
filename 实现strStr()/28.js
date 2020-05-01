/**
 * @name lsw
 * @date 2020-5-1
 * @function 实现strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let str = needle[0];
    let i = 0;   
    if (needle.length == 0) { 
        return 0;
    }
    // while (i < haystack.length) {
    //     if (haystack[i] == str) { 
    //         if (haystack.substring(i, i + needle.length) == needle) { 
    //             return i;
    //         }; 
    //     }
    //     i++;
    // }  
    // return -1;

    console.log(haystack.indexOf(needle));
}; 
strStr("hello", 'll');
strStr("aaaaa", 'bba');
strStr("", "");
strStr("", 'a');
strStr("mississippi","issip");
strStr("aaa", "aaaaa");




