// A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

// There is an array of clouds,  and an energy level . The character starts from  and uses  unit of energy to make a jump of size  to cloud . If it lands on a thundercloud, , its energy () decreases by  additional units. The game ends when the character lands back on cloud .

// Given the values of , , and the configuration of the clouds as an array , determine the final value of  after the game ends.

// Example.

// The indices of the path are . The energy level reduces by  for each jump to . The character landed on one thunderhead at an additional cost of  energy units. The final energy level is .

// Note: Recall that  refers to the modulo operation. In this case, it serves to make the route circular. If the character is at  and jumps , it will arrive at .

// Function Description

// Complete the jumpingOnClouds function in the editor below.

// jumpingOnClouds has the following parameter(s):

// int c[n]: the cloud types along the path
// int k: the length of one jump
// Returns

// int: the energy level remaining.
// Input Format

// The first line contains two space-separated integers,  and , the number of clouds and the jump distance.
// The second line contains  space-separated integers  where . Each cloud is described as follows:

// If , then cloud  is a cumulus cloud.
// If , then cloud  is a thunderhead.

// SOLUTION

// 1. Start from cloud index 0 and energy level 100
// 2. While you are not on cloud 0 do:
//  a. Check if you are on thunderstorm c[i] = 1. If you are -> energy = energy - 2
//  b. Jump to next cloud index. Increase coud index with the k and apply % c.length because if you jump over the last cloud you go to the first one
//  c. Decrease enegry level by 1
// 3. Return the energy level

function jumpingOnClouds(c, k) {
  let i = 0
  let energy = 100

  do {
    if (c[i] === 1) {
      energy -= 2
    }
    i = (i + k) % c.length
    energy -= 1
  } while (i !== 0)
  return energy
}
