/* 
  Valid parantheses: https://leetcode.com/problems/valid-parentheses/
*/

/**
 * Checks if a given string of parentheses, braces, and brackets is balanced.
 *
 * @param {string} s - The string to check for balanced parentheses, braces, and brackets.
 * @returns {boolean} - Returns true if the string has balanced parentheses, braces, and brackets, and false otherwise.
 * @summary
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

const isValid = (s) => {
  // Map of closing brackets to their corresponding opening brackets
  const map = { ")": "(", "}": "{", "]": "[" };
  // Stack to keep track of opening brackets
  const stack = [];
  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    // If the current character is a closing bracket
    if (s[i] in map) {
      // If the stack is empty or the top of the stack does not match the corresponding opening bracket
      if (stack.length === 0 || map[s[i]] !== stack[stack.length - 1]) {
        return false;
      }
      // Remove the corresponding opening bracket from the stack
      stack.pop();
    } else {
      // If the current character is an opening bracket, add it to the stack
      stack.push(s[i]);
    }
  }
  // If the stack is empty, the brackets are balanced, otherwise they are unbalanced
  return stack.length === 0 ? true : false;
};

/* Input */
let input = [
  { s: "()[]{}", result: true },
  { s: "([{}])", result: true },
  { s: "(]", result: false },
  { s: "([)]", result: false },
  { s: "{[]}", result: true },
  { s: "]]}", result: false },
];

/* Driver */
for (let i of input) {
  console.log(isValid(i.s), i.result);
}
