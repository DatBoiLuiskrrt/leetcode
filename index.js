//using a dictionary and also finding the index of the numbers
function twoSum(nums, target) {
  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    //checking to see if value is inside the dictionary
    if (memory[nums[i]] === undefined) {
      //if not then you set that value along with the index
      //why because if you encounter this number again then you know you have a match
      //if statement would not be true if value had already been defined
      memory[target - nums[i]] = i;
      //{7:0, 2:1, }
      //if target - firstvalue = secondvalue
      //firstvalue + secondvalue = target
    } else {
      return [memory[nums[i]], i];
    }
  }
}
//using a dictionary and finding the actual numbers that add up to the target
function twoSum2(nums, target) {
  let memory = {};
  for (let item of nums) {
    let potentialNum = target - item;
    if (potentialNum in memory) {
      return [potentialNum, item];
    } else {
      memory[item] = true;
    }
  }
  return [];
}

//brute force solution
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let secondNum = nums[j];
      if (firstNum + secondNum === target) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
