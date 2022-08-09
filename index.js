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
console.log(twoSum([2, 7, 11, 15], 9));
