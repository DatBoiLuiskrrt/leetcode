# Two sum
def twoNumberSum(array, targetSum){
  storage = set(num for num in array)

  for num in array:
    target = targetSum - num
    if target in storage and target is not num:
      return [num, target]

  return []
}