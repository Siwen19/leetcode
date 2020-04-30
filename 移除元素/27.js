/**
 * @name lsw
 * @date 2020-4-30
 * @function 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  let j = 0
  while (i < nums.length) {
    if (nums[i] != val) {
      nums[j] = nums[i]
      j++
    }
    i++
  }
  // while (i < nums.length) {
  //         if (nums[i] == val) {
  //             nums.splice(i, 1)
  //             j++; 
  //         } 
  //         i++
  //     } 
  console.log(j)
  console.log(nums)
}
removeElement([3, 2, 2, 3], 3)
