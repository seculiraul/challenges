// The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return .

// Example

// There are two matching pairs of values:  and . The indices of the 's are  and , so their distance is . The indices of the 's are  and , so their distance is . The minimum distance is .

// Function Description

// Complete the minimumDistances function in the editor below.

// minimumDistances has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the minimum distance found or  if there are no matching elements
// Input Format

// The first line contains an integer , the size of array .
// The second line contains  space-separated integers .

// SOLUTION

/*
    1. Init min with the max number
    2. Take 2 pointers i,j. i starts from the first index and goes to the last - 1 and and j is one value ahead and goes to the end
    3. If elem of i is equal with elem of j and the difference between them is less then min update min
    4. If min is still the max number return -1 else return min
 */

function minimumDistances(a) {
  // Write your code here
  let min = Infinity
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j] && j - i < min) {
        min = j - i
        break
      }
    }
  }
  return min === Infinity ? -1 : min
}
