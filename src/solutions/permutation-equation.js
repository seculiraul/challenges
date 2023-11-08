// Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , find any integer  such that  and keep a history of the values of  in a return array.

// Example

// Each value of  between  and , the length of the sequence, is analyzed as follows:

// , so
// , so
// , so
// , so
// , so
// The values for  are .

// Function Description

// Complete the permutationEquation function in the editor below.

// permutationEquation has the following parameter(s):

// int p[n]: an array of integers
// Returns

// int[n]: the values of  for all  in the arithmetic sequence  to
// Input Format

// The first line contains an integer , the number of elements in the sequence.
// The second line contains  space-separated integers  where .

// SOLUTION

function permutationEquation(p) {
  // Write your code here
  const allY = []
  for (let x = 1; x <= p.length; x++) {
    const pOfX = p.indexOf(x) + 1
    const y = p.indexOf(pOfX) + 1
    if (pOfX !== -1 && y !== -1) {
      allY.push(y)
    }
  }

  return allY
}
