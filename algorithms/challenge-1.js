function noOfElements(x, y, z) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= y && x[i] <= z) {
      count++;
    }
  }

  return count;
}

// # Challenge 1

// Implement the function noOfElements(x, y, z)
// which returns the number of elements in that array x,
// that are greater than or equal to the variable y
// and less than or equal to the variable z

// ## Examples

// noOfElements([2,3,0,1,7], 4, 8) to return 1
// noOfElements([3,3,3,5,18,6,20], 15, 30) to return 2
// noOfElements([4,6,2,6,7,7], 0, 7) to return 6

module.exports = noOfElements;
