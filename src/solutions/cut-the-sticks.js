// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

// Example

// The shortest stick length is , so cut that length from the longer two and discard the pieces of length . Now the lengths are . Again, the shortest stick is of length , so cut that amount from the longer stick and discard those pieces. There is only one stick left, , so discard that stick. The number of sticks at each iteration are .

// Function Description

// Complete the cutTheSticks function in the editor below. It should return an array of integers representing the number of sticks before each cut operation is performed.

// cutTheSticks has the following parameter(s):

// int arr[n]: the lengths of each stick

// SOLUTION

// 1. initialzie result array
// 2, Whilte array is not empty push the current length of the array in the result array then get the minimum in the array and decrease each element by the minimum
// 3. Remove the empty elements on the array

function cutTheSticks(arr) {
  // Write your code here
  const res = []

  while (arr.length) {
    res.push(arr.length)
    const min = Math.min(...arr)
    arr = arr.map((el) => el - min).filter((el) => el > 0)
  }

  return res
}
