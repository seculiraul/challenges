// You have two strings of lowercase English letters. You can perform two types of operations on the first string:

// Append a lowercase English letter to the end of the string.
// Delete the last character of the string. Performing this operation on an empty string results in an empty string.
// Given an integer, , and two strings,  and , determine whether or not you can convert  to  by performing exactly  of the above operations on . If it's possible, print Yes. Otherwise, print No.

// Example.

// To convert  to , we first delete all of the characters in  moves. Next we add each of the characters of  in order. On the  move, you will have the matching string. Return Yes.

// If there were more moves available, they could have been eliminated by performing multiple deletions on an empty string. If there were fewer than  moves, we would not have succeeded in creating the new string.

// Function Description

// Complete the appendAndDelete function in the editor below. It should return a string, either Yes or No.

// appendAndDelete has the following parameter(s):

// string s: the initial string
// string t: the desired string
// int k: the exact number of operations that must be performed
// Returns

// string: either Yes or No
// Input Format

// The first line contains a string , the initial string.
// The second line contains a string , the desired final string.
// The third line contains an integer , the number of operations.

// SOLUTION

// 1. Check from the beginning of the strings how many letters there are in common
// 2. Stop when you find a difference in the 2 strings
// 3. To get the common letters you will need to delete the common letters length from first string length
// 4. To get the number of letters you need to add you need to do secound string length - the common string length but in an abs because the common stirng can be bigger than the second string
// 5. To get the moves you should add the numbers of deletion + number of additions
// 6. Check if this number is less or equal and this number - moves number % 2 === 0 -> we do this to ensure that it can get the exactly number of stepts

function appendAndDelete(s, t, k) {
  // Write your code here
  let combined = 0
  let moves = 0
  let dif = false
  let i = 0

  if (s.length + t.length <= k) {
    return 'Yes'
  }
  while (!dif && i < s.length && i < t.length) {
    if (s[i] === t[i]) {
      combined++
    } else {
      dif = true
    }
    i++
  }
  moves = s.length - combined
  moves = moves + Math.abs(t.length - combined)

  return moves <= k && (k - moves) % 2 === 0 ? 'Yes' : 'No'
}
