function highestSum(x, y) {
  let xSorted = x.sort((a, b) => b - a);
  let ySorted = y.sort((a, b) => b - a);

  let sum = 0;

  if (xSorted[0] > ySorted[0]) {
    for (let xn = 0; xn < xSorted.length; xn++) {
      sum += xSorted[xn];
    }
  } else {
    for (let yn = 0; yn < ySorted.length; yn++) {
      sum += ySorted[yn];
    }
  }
  return sum;
}

// # Challenge 4

// Implement the function highestSum(x, y)
// where x and y are both arrays,
// return the sum of the array with the highest value
// when it's elements are summed respectively.

// ## Examples

// highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]) to return 20
// highestSum([15,7], [12,17]) to return 29
// highestSum([30], [3,6,2,6]) to return 30

module.exports = highestSum;
