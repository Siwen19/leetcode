/**
 * @name lsw
 * @date 2020-5-2
 * @function 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = Math.floor(nums.length / 2)
  let isTrue = nums[i] < target ? true : false
  if (nums.includes(target)) {
    console.log(nums.indexOf(target))
    return
  }
  while (isTrue) {
    i++
    if (i == nums.length) {
      console.log(i)
      return
    }
    if (nums[i] >= target) {
      console.log(i)
      isTrue = !isTrue
    }
  }
  while (i > 0) {
    i--
    if (nums[i] <= target) {
      i += 1
      console.log(i)
      return
    }
  }
  console.log(0)
}
searchInsert([1,3,5,6], 5)
