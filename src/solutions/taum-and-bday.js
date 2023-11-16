// Taum is planning to celebrate the birthday of his friend, Diksha. There are two types of gifts that Diksha wants from Taum: one is black and the other is white. To make her happy, Taum has to buy  black gifts and  white gifts.

// The cost of each black gift is  units.
// The cost of every white gift is  units.
// The cost to convert a black gift into white gift or vice versa is  units.
// Determine the minimum cost of Diksha's gifts.

// Example

// He can buy a black gift for  and convert it to a white gift for , making the total cost of each white gift . That matches the cost of a white gift, so he can do that or just buy black gifts and white gifts. Either way, the overall cost is .

// Function Description

// Complete the function taumBday in the editor below. It should return the minimal cost of obtaining the desired gifts.

// taumBday has the following parameter(s):

// int b: the number of black gifts
// int w: the number of white gifts
// int bc: the cost of a black gift
// int wc: the cost of a white gift
// int z: the cost to convert one color gift to the other color
// Returns

// int: the minimum cost to purchase the gifts
// Input Format

// The first line will contain an integer , the number of test cases.

// The next  pairs of lines are as follows:
// - The first line contains the values of integers  and .
// - The next line contains the values of integers , , and .

// SOLUTION

// 1. Check if cost of white + convert cost is smaller that cost of black -> in this case use cost of white + conversion to buy black
// 2. Check if cost of black + convert cost is smaller that cost of white -> in this case use cost of black + conversion to buy white
// 3. Else you sohuld buy white with cost of white and black with cost of black
// NOTE: the numbers can be very large so use bigint and return a string

function taumBday(b, w, bc, wc, z) {
  const bigB = BigInt(b)
  const bigW = BigInt(w)
  const bigBc = BigInt(bc)
  const bigWc = BigInt(wc)
  const bigZ = BigInt(z)
  let res = 0

  if (bigWc + bigZ < bigBc) {
    res = bigW * bigWc + bigB * (bigWc + bigZ)
  } else if (bigBc + bigZ < bigWc) {
    res = bigB * bigBc + bigW * (bigBc + bigZ)
  } else {
    res = bigB * bigBc + bigW * bigWc
  }
  return res.toString()
}
