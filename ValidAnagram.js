/**
 * Checks if two given strings a and b are anagrams of each other.
 *
 * @param {string} a - The first input string.
 * @param {string} b - The second input string.
 * @return {boolean} Returns true if the given strings are anagrams, false otherwise.
 *
 * @summary The function first checks if the two input strings have the same length. If not, it returns false. The function then uses a hash table to store the frequency of characters in the first string and subtracts the frequency of characters in the second string. Finally, it checks if all the values in the hash table are zero, which means that both strings have the same characters with the same frequency.
 *
 * @description
 * Time complexity: O(n), where n is the length of the input strings a and b.
 * Space complexity: O(k), where k is the number of unique characters in the input strings a and b.
 */

const isAnagram = (a, b) => {
  if (a.length !== b.length) return false;

  let map = {};

  for (let i = 0; i < a.length; i++) {
    if (!map[a[i]]) map[a[i]] = 1;
    else map[a[i]] += 1;

    if (!map[b[i]]) map[b[i]] = -1;
    else map[b[i]] -= 1;
  }

  for (let m in map) {
    if (map[m] !== 0) return false;
  }

  return true;
};

/* Input */
let input = [
  { a: "anagram", b: "nagaram", result: true },
  { a: "rat", b: "car", result: false },
];

/* Driver */
for (let i of input) {
  console.log(isAnagram(i.a, i.b), i.result);
}
