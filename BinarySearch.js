/**
 * Binary Search: https://leetcode.com/problems/binary-search
 *
 * Searches for a target value in a sorted array using binary search.
 * @param {number[]} nums - A sorted array of numbers.
 * @param {number} target - The value to search for in the array.
 *
 * @return {number} - The index of the target value in the array, or -1 if it is not found.
 *
 * @summary
 * Time complexity: O(log n).
 * Space complexity: O(1).
 **/

const search = (nums, target) => {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

/* Input */
let input = [
  { nums: [1, 2, 3, 4, 5], target: 8, result: -1 },
  { nums: [10, 20, 30, 40, 50], target: 40, result: 3 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 9, result: 4 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 2, result: -1 },
];

/* Driver */
for (let i of input) {
  console.log(search(i.nums, i.target), i.result);
}
