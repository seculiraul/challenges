// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged (i.e.: .
// If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, .
// If the book is returned after the expected return month but still within the same calendar year as the expected return date, the .
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of .
// Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be .

// Example

// The first values are the return date and the second are the due date. The years are the same and the months are the same. The book is  days late. Return .

// Function Description

// Complete the libraryFine function in the editor below.

// libraryFine has the following parameter(s):

// d1, m1, y1: returned date day, month and year, each an integer
// d2, m2, y2: due date day, month and year, each an integer
// Returns

// int: the amount of the fine or  if there is none

// SOLUTION

// 1. Check if year is greater
// 2. Check if month is greater but the year is less or equal. If true decrease months and multiply by fine
// 3. Check if day is greater but month and year is equal or less. If true decrease days and multiply by fine
// 4. If no one of this cases were true that means the book is returned on time

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  if (y1 > y2) {
    return 10000
  } else if (m1 > m2 && y2 <= y1) {
    return (m1 - m2) * 500
  } else if (d1 > d2 && m2 <= m1 && y2 <= y1) {
    return (d1 - d2) * 15
  } else {
    return 0
  }
}
