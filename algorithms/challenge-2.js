function divisible(a) {
  return a.filter(function (x) {
    return x > 15 && x % 2 === 0;
  }).length;
}

// # Challenge 2

// Implement the function divisible(a)
// which returns the number of the elements in that array a
// that are divisible by 2 and greater than 15.

// ## Examples

// divisible([2,3,12,18,42,24]) to return 3
// divisible([100,84,37]) to return 2
// divisible([5,8,6,12]) to return 0

module.exports = divisible;
