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

// 217 Contains Duplicate
/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
var containsDuplicate = function (nums) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === true) {
      return true;
    } else {
      hashMap[nums[i]] = true;
    }
  }
  return false;
};

// 49. Group Anagrams
/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */
var groupAnagrams = function (strs) {
  const sortedStr = strs.map((word) => word.split("").sort().join(""));
  const hash = {};

  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedStr[i]]) {
      hash[sortedStr[i]] = [strs[i]];
    } else {
      hash[sortedStr[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
};

/**
 * 242 valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/**
 *
 */
let isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  const hashS = {};
  const hashT = {};
  for (let i = 0; i < s.length; i++) {
    hashS[s[i]] = hashS[s[i]] + 1;
    hashT[s[i]] = hashT[s[i]] + 1;
  }
  for (let i = 0; i < hashS.length; i++) {
    if (hashS[i] != hashT[i]) {
      return false;
    }
  }
  return true;
};

//347. Top K Frequent Elements
/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */

var topKFrequent = function (nums, k) {
  const seen = {};

  for (let num of nums) {
    if (seen[num] === undefined) {
      seen[num] = 1;
    } else {
      seen[num]++;
    }
  }

  const bucket = [];
  for (let i = 0; i <= nums.length; i++) {
    bucket.push([]);
  }

  for (let key in seen) {
    let count = seen[key];
    bucket[count].push(key);
  }

  let res = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length === 0) {
      continue;
    } else {
      res = [...res, ...bucket[i]];
    }
  }

  return res.slice(0, k);
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(containsDuplicate([2, 7, 11, 15]));
console.log(isAnagram("anagram", "nagaram"));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], (k = 2)));
