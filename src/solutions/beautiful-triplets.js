// Given a sequence of integers , a triplet  is beautiful if:

// Given an increasing sequenc of integers and the value of , count the number of beautiful triplets in the sequence.

// Example

// There are three beautiful triplets, by index: . To test the first triplet,  and .

// Function Description

// Complete the beautifulTriplets function in the editor below.

// beautifulTriplets has the following parameters:

// int d: the value to match
// int arr[n]: the sequence, sorted ascending
// Returns

// int: the number of beautiful triplets
// Input Format

// The first line contains  space-separated integers,  and , the length of the sequence and the beautiful difference.
// The second line contains  space-separated integers .

// SOLUTION

/*
    1. Check for each element if there is an elemnt that is sum of crt element + d and other element sum of crt + 2 * d
*/

function beautifulTriplets(d, arr) {
  // Write your code here
  return arr.reduce(
    (acc, el) =>
      acc + (arr.includes(el + d) && arr.includes(el + d + d) ? 1 : 0),
    0
  )
}
