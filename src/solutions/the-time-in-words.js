// Given the time in numerals we may convert it into words, as shown below:

// At , use o' clock. For , use past, and for  use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

// Function Description

// Complete the timeInWords function in the editor below.

// timeInWords has the following parameter(s):

// int h: the hour of the day
// int m: the minutes after the hour

// Returns

// string: a time string as described

// SOLUTION

/*
    1. There is the case when it's 0 minutes -> o' clock
    2. There is the case when it's 30 minutes -> half past
    3. There is a case when minutes < 30 -> minutes (or minute if m === 1) past h
    4. there is a case when minutes > 30 -> minutes (or minute if m === 59 ) to h+1 (or 1 if h === 12)
    5. If m is 15 or 45 there are is no minutes in the result
*/

function timeInWords(h, m) {
  // Write your code here
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty ehght',
    29: 'twenty nine',
  }
  if (m === 0) {
    return `${numbers[h]} o' clock`
  } else if (m === 30) {
    return `half past ${numbers[h]}`
  } else if (m === 15) {
    return `${numbers[m]} past ${numbers[h]}`
  } else if (m === 45) {
    return `${numbers[60 - m]} to ${numbers[h === 12 ? 1 : h + 1]}`
  } else {
    return 30 > m
      ? `${numbers[m]} minute${m === 1 || m === 15 ? '' : 's'} past ${
          numbers[h]
        }`
      : `${numbers[60 - m]} minute${60 - m === 1 ? '' : 's'} to ${
          numbers[h === 12 ? 1 : h + 1]
        }`
  }
}
