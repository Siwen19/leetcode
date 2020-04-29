/**
 * @name lsw
 * @date 2020-4-21
 * @function 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */ 
var twoSum = function(nums, target) { 
    const w = new Map(); 
    // 运行时间短， 但耗内存
    for(let j=0; j<nums.length; j++) {
        const result = target - nums[j];   

        if (w.has(result)) {
            console.log([w.get(result), j]);
        } 
        w.set(nums[j], j); 
    } 

    //  运行时间虽长一些，但耗内存少
    // const array = [];
    // for (let i=0; i<nums.length; i++) { 
    //     for (let j=i+1; j<nums.length; j++) {
    //         if (nums[i] + nums[j] == target) { 
    //             console.log([i, j]);
    //         }  
    //     } 
    // }
};  
twoSum([3,2,4],6)
