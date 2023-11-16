// An English text needs to be encrypted using the following encryption scheme.
// First, the spaces are removed from the text. Let  be the length of this text.
// Then, characters are written into a grid, whose rows and columns have the following constraints:

// Example

// After removing spaces, the string is  characters long.  is between  and , so it is written in the form of a grid with 7 rows and 8 columns.

// ifmanwas
// meanttos
// tayonthe
// groundgo
// dwouldha
// vegivenu
// sroots
// Ensure that
// If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. .
// The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:

// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

// Create a function to encode a message.

// Function Description

// Complete the encryption function in the editor below.

// encryption has the following parameter(s):

// string s: a string to encrypt
// Returns

// string: the encrypted string
// Input Format

// One line of text, the string

// SPLUTION

/*
1. Remove the spaces in string
2. Cet the row and col by round up and down the sqrt of the length
3. Check if the row * col is at least the size of the string, if it's not then increace the row by one (make them equal)
4. Put the letters in an array grouped by number of rows
5. Add the letters from the first elelment of each group to the last 
*/

function encryption(s) {
  // Write your code here
  let text = s.split(' ').join('')
  const res = []
  const dimensions = [
    Math.floor(Math.sqrt(text.length)),
    Math.ceil(Math.sqrt(text.length)),
  ]
  if (dimensions[0] * dimensions[1] < text.length) {
    dimensions[0] = dimensions[1]
  }
  const arr = []
  for (let i = 0; i < dimensions[0]; i++) {
    arr.push(text.slice(0, dimensions[1]))
    text = text.slice(dimensions[1])
  }
  for (let i = 0; i < dimensions[1]; i++) {
    for (let j = 0; j < dimensions[0]; j++) {
      if (arr?.[j]?.[i]) {
        res.push(arr?.[j]?.[i])
      }
    }
    res.push(' ')
  }
  return res.join('')
}
