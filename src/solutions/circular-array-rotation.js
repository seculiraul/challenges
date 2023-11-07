// John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

// For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

// Example

// Here  is the number of rotations on , and  holds the list of indices to report. First we perform the two rotations:

// Now return the values from the zero-based indices  and  as indicated in the  array.

// Function Description

// Complete the circularArrayRotation function in the editor below.

// circularArrayRotation has the following parameter(s):

// int a[n]: the array to rotate
// int k: the rotation count
// int queries[1]: the indices to report

// SOLUTION

function circularArrayRotation(a, k, queries) {
  // Write your code here
  const rotateRight = (arr) => {
    const last = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1]
    }
    arr[0] = last
    return arr
  }

  for (let i = 0; i < k; i++) {
    a = rotateRight(a)
  }
  return queries.map((el) => a[el])
}
