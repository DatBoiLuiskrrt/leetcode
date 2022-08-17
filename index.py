# Two sum
def twoNumberSum(array, targetSum){
  storage = set(num for num in array)

  for num in array:
    target = targetSum - num
    if target in storage and target is not num:
      return [num, target]

  return []
}
# 217. Contains Duplicate 
#Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()
    
        for value in nums:
            if value in hashset:
                return True
            hashset.add(value)
        return False
    