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
    


# 242 Valid Anagram
def isAnagram(self, s: str, t: str) -> bol:
  if len(s) != len(t):
    return False
  countS, countT = {}, {}

  for i in range(len(s)):
    countS[s[i]] = 1 + countS.get(s[i], 0)
    countT[t[i]] = 1 + countT.get(t[i], 0)
    for c in countS:
      if countS[c] != countT.get(c, 0):
        return False
    return True
    