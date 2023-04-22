/*
  Two Sum: https://leetcode.com/problems/two-sum
*/

/* 
  Returns the indices of the two numbers whose sum is equal to the target
  @param
  nums: Array[number]
  target: number
  @return
  Array[number, number]
*/

const twoSum = (nums, target) => {
  let map = new Map();
  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return [map.get(nums[i]), i];
    else map.set(target - nums[i], i);
  }
  return [-1, -1];
};

/*
  Create a map to store the difference of target - current number
  to check for a match in constant time. 

  Needs to go through every element at least once.
  Time complexity: O(n) 

  Store the elements in a new map.
  Space complexity: O(n)
*/

/* Input */
let input = [
  { nums: [1, 2, 3, 4, 5], target: 8, result: [2, 4] },
  { nums: [10, 20, 30, 40, 50], target: 80, result: [2, 4] },
  { nums: [-1, -2, -3, -4, -5], target: -3, result: [0, 1] },
  { nums: [0, 10, -10, 20, -20], target: 30, result: [1, 3] },
  { nums: [2, 4, 6, 8, 10, 12], target: 6, result: [0, 1] },
];

/* Driver */
for (let i of input) {
  console.log(twoSum(i.nums, i.target), i.result);
}
