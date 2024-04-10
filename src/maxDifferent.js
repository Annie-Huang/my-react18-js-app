/*
https://github.com/search?q=latitude%20financial&type=repositories

Latitude Financial Stock Trading Coding Exercise by Edgar.

Suppose we could access yesterday's stock prices as a list, where:

The indices are the time in minutes past trade opening time, which was 10:00am local time.
The values are the price in dollars of the stock at that time.
So if the stock cost $5 at 11:00am, stock_prices_yesterday[60] = 5.
Write an efficient function that takes an array of stock prices and returns the best profit could have been made from 1 purchase and 1 sale of 1 stock.

For example:

int[] stockPrices = [10, 7, 5, 8, 11, 9]
Assert.assertEquals (6, getMaxProfit(stockPrices)); // returns 6 (buy at $5 sell at $11)

*/

// https://stackoverflow.com/questions/29585679/find-maximum-difference-in-array
// an algorithm to return the difference of any pair of numbers, such that the larger integer in the pair occurs at a higher index (in the array) than the smaller integer.

function maxDifference(arr) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    const newArr = arr.slice(i + 1);
    const max = newArr.length === 0 ? -1 : Math.max(...newArr);
    // console.log('newArr=', newArr);
    // console.log('max=', max);

    if (max - arr[i] > result) {
      result = max - arr[i];
    }
    // console.log('result=', result);
  }

  return result;
}

console.log('maxDifference', maxDifference([10, 7, 5, 8, 11, 9]));
console.log(maxDifference([1, 2, 3])); //2
console.log(maxDifference(3, 2, 1)); //-1
console.log(maxDifference([2, 3, 10, 2, 4, 8, 1])); //8
console.log(maxDifference([7, 9, 5, 6, 3, 2])); //2
console.log(maxDifference([22, 2, 4, 5, 6, 444, 1, 666])); //665
console.log(maxDifference([7, 9, 5, 6, 3, 2])); //2
console.log(maxDifference([666, 555, 444, 33, 22, 23])); //1
console.log(maxDifference([2, 3, 10, 2, 4, 8, 1])); //8
