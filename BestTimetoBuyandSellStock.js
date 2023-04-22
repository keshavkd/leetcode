/**
 * Best Time to Buy and Sell Stock: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Finds the maximum profit that can be obtained by buying and selling a stock.
 *
 * @param {number[]} prices - An array of stock prices for each day.
 * @return {number} - The maximum profit that can be obtained by buying and selling the stock.
 *
 * @summary
 * This function takes an array of stock prices as input and returns the maximum profit that can be obtained by buying
 * and selling the stock at different times. The function iterates through the array of prices one element at a time,
 * keeping track of the minimum price seen so far and the maximum profit that can be obtained by selling the stock at
 * the current price. The final maximum profit is returned.
 *
 * Time complexity: O(n), where n is the length of the input array.
 * Space complexity: O(1), because the function only uses a constant amount
 * */

const maxProfit = (prices) => {
  if (prices.length < 2) return 0;

  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) min = prices[i];
    else profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

/* Input */
let input = [
  { prices: [7, 1, 5, 3, 6, 4], result: 5 },
  { prices: [7, 6, 4, 3, 1], result: 0 },
];

/* Driver */
for (let i of input) {
  console.log(maxProfit(i.prices), i.result);
}
