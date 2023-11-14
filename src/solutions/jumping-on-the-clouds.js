// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

// Example

// Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .

// Function Description

// Complete the jumpingOnClouds function in the editor below.

// jumpingOnClouds has the following parameter(s):

// int c[n]: an array of binary integers
// Returns

// int: the minimum number of jumps required
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// SOLUTION

/*
1. Init the intex to 0 and the stept taken
2. While you are not at the end of the array try to jump 2 positions if not possible jump 1
3. You can't jump 2 positions if the index will surapss the last elem of the array  or if the index will get on a thunder cloud
4. On each jump increment the steps
*/

function jumpingOnClouds(c) {
  // Write your code here
  let i = 0
  let res = 0
  while (i < c.length - 1) {
    i += i + 2 < c.length && c[i + 2] === 0 ? 2 : 1
    res++
  }
  return res
}
