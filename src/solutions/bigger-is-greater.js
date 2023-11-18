// Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list.

// Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

// It must be greater than the original word
// It must be the smallest word that meets the first condition
// Example

// The next largest word is .

// Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.

// Function Description

// Complete the biggerIsGreater function in the editor below.

// biggerIsGreater has the following parameter(s):

// string w: a word
// Returns
// - string: the smallest lexicographically higher string possible or no answer

// Input Format

// The first line of input contains , the number of test cases.
// Each of the next  lines contains .

// SOLUTION

/*
1. Find the first character from the end of the string to start that is lower than the one in his right and save the index
2. IF there isn't one then return no answer
3. Find the first character from end to start of string that is greater than the character you found on the other step
4. Swap them
5. Construct a new string from start to the index saved (included) + sort the rest of the letters from low to high 
*/

function biggerIsGreater(w) {
  // Write your code here
  let temp = -1
  const arr = w.split('')
  let poz = -1
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      poz = i - 1
      break
    }
  }
  if (poz === -1) {
    return 'no answer'
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[poz]) {
      temp = i
      break
    }
  }
  const x = arr[poz]
  arr[poz] = arr[temp]
  arr[temp] = x

  return (
    arr.join('').slice(0, poz + 1) +
    arr
      .join('')
      .slice(poz + 1)
      .split('')
      .sort()
      .join('')
  )
}
