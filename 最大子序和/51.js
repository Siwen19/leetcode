/**
 * @name lsw
 * @date 2020-5-3
 * @function 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
   let sum = 0;
   let i = nums[0]; 
   for (let num of nums) {
       if (sum > 0) {
           sum += num;
       } else {
           sum = num;
       }
       i = Math.max(sum, i);
   }
   console.log(i);
}
maxSubArray([1, -2, 2, -3, 4, -1, 5])
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSubArray([3, -3, 2, 1])
