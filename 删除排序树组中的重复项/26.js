/**
 * @name lsw
 * @date 2020-4-29
 * @function 删除排序树组中的重复项
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  // while (i < nums.length-1) {
  //     if (nums[i] == nums[i + 1]) {
  //         nums.splice(i+1, 1); 
  //     } else {
  //         i ++ ; 
  //     } 
  // } 
  // if (i >= nums.length - 1) {
  //     console.log(nums.length)
  // }     
  // let newArr = Array.from(new Set(nums))
  // console.log(newArr); 
  // console.log(newArr.length)
  
  // let i = 0;  
  // let temp = nums[0]
  // while (i < nums.length - 1) {
  //     if (temp == nums[i + 1]) {
  //         nums.splice(i + 1, 1); 
  //     } else { 
  //         temp = nums[i + 1]; //不同时 指针换一个 
  //         i++
  //     } 
  // }
  // console.log(nums) 
  // console.log(nums.length)

  let i = 0;  
  let j = 0
  let temp = nums[j]
  while (i <= nums.length - 1) {
      if (temp == nums[i + 1]) {
          i++; 
      } else { 
          j++
          nums[j] = nums[i + 1]
          temp = nums[i + 1]; 
          i++
      } 
  }
  console.log(nums) 
  console.log(j)
}
removeDuplicates([1, 1, 2])
