// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example

// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

// SOLUTION

// check how many occurences in inital s
// multiply by Math.floor(n / s.length)
// get mod of n/ s.length -> take the first mod characters and count how many a
// add to the multiplied result

function repeatedString(s, n) {
  // Write your code here
  const getACharacter = (str) => str.split('').filter((el) => el === 'a').length

  return (
    getACharacter(s) * Math.floor(n / s.length) +
    getACharacter(s.slice(0, n % s.length))
  )
}
