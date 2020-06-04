var kidsWithCandies = function(candies, extraCandies) {
    if (candies.length < 2 || candies.length >100) {
        return;
    }

    if (extraCandies < 1 || extraCandies >50) {
        return;
    }

    let temp = []; 

    candies.forEach((ele) => {
        let maxInArray = Math.max(...candies);
        if (ele < 1 || ele >100) return; 
        if ((ele + extraCandies) >= maxInArray) {
            temp.push(true);
        } else {
            temp.push(false);
        }
    })

    return temp;
}; 
console.log(kidsWithCandies([12,1,102], 100));