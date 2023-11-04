// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:

// PDF-highighting.png

// There is a list of  character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at index . There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

// Example

// The heights are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .

// Function Description

// Complete the designerPdfViewer function in the editor below.

// designerPdfViewer has the following parameter(s):

// int h[26]: the heights of each letter
// string word: a string
// Returns

// int: the size of the highlighted area
// Input Format

// The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z].
// The second line contains a single word consisting of lowercase English alphabetic letters.

// Constraints

// , where  is an English lowercase letter.
//  contains no more than  letters.

// SOLUTION

function designerPdfViewer(h, word) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'

  return (
    word.split('').reduce((heigth, letter) => {
      const index = letters.indexOf(letter)
      return h[index] > heigth ? h[index] : heigth
    }, 0) * word.length
  )
}
