/**
 * Valid palindrome: https://leetcode.com/problems/valid-palindrome
 * Determines whether a given string is a palindrome, ignoring non-alphanumeric characters and case.
 *
 * @summary Check if a string is a palindrome.
 *
 * @param {string} s - The string to check.
 * @return {boolean} - Returns true if the string is a palindrome, false otherwise.
 *
 * @description
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * */

var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;

  const isAlphanumeric = (character) => {
    return /^[a-zA-Z0-9]+$/.test(character);
  };

  while (i < j) {
    while (!isAlphanumeric(s[i]) && i < j) i++;
    while (!isAlphanumeric(s[j]) && i < j) j--;

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++, j--;
  }

  return true;
};

/* Input */
let input = [
  { s: "A man, a plan, a canal: Panama", result: true },
  { s: "race a car", result: false },
  { s: " ", result: true },
  { s: "0P", result: false },
  { s: "1,0;&1", result: true },
];

/* Driver */
for (let i of input) {
  console.log(isPalindrome(i.s), i.result);
}
