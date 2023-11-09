// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

// Note: A square integer is an integer which is the square of an integer, e.g. .

// Example

// There are three square integers in the range:  and . Return .

// Function Description

// Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from  to .

// squares has the following parameter(s):

// int a: the lower range boundary
// int b: the upper range boundary
// Returns

// int: the number of square integers in the range
// Input Format

// The first line contains , the number of test cases.
// Each of the next  lines contains two space-separated integers,  and , the starting and ending integers in the ranges.

// SOLUTION

/*

1. Floor the result of sqrt of the last number
2. Ceil the resut of sqrt of the first number
3. Decrease the first result by the secound result and add 1
*/

function squares(a, b) {
  // Write your code here
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1
}
