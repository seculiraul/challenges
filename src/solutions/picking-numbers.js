// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

// Example

// There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

// Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the length of the longest subarray that meets the criterion
// Input Format

// The first line contains a single integer , the size of the array .
// The second line contains  space-separated integers, each an .

// SOLUTION

function pickingNumbers(a) {
  const uniqueNumbers = [...new Set(a)]

  return Math.max(
    ...uniqueNumbers.map((uniq) => {
      return a.filter((nr) => uniq === nr || uniq + 1 === nr).length
    })
  )
}
