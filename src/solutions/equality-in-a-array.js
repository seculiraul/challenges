// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// Example

// Delete the  elements  and  leaving . If both twos plus either the  or the  are deleted, it takes  deletions to leave either  or . The minimum number of deletions is .

// Function Description

// Complete the equalizeArray function in the editor below.

// equalizeArray has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer , the number of elements in .
// The next line contains  space-separated integers .

// SOLUTION
// Store how many occurences of each diffrent value is in the array
// Return the difference between the total of all occurences in the array and the most found number

function equalizeArray(arr) {
  // Write your code here
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1
  }
  const mostFoundNumer = Math.max(...Object.keys(map).map((key) => map[key]))
  return (
    Object.keys(map).reduce((acc, crt) => acc + map[crt], 0) - mostFoundNumer
  )
}
