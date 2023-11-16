// David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.

// David wants to perform some number of swap operations such that:

// Each container contains only balls of the same type.
// No two balls of the same type are located in different containers.
// Example

// David has  containers and  different types of balls, both of which are numbered from  to . The distribution of ball types per container are shown in the following diagram.

// image

// In a single operation, David can swap two balls located in different containers.

// The diagram below depicts a single swap operation:

// image

// In this case, there is no way to have all green balls in one container and all red in the other using only swap operations. Return Impossible.

// You must perform  queries where each query is in the form of a matrix, . For each query, print Possible on a new line if David can satisfy the conditions above for the given matrix. Otherwise, print Impossible.

// SOLUTION

// 1. Take 2 objects. One to store the number of balls in each bucket and the other to count each type of ball from all buckets
// 2. Count the sum of each bucket and each ball type from all the buckets and store them in their object
// 3. Sort the values from the arrays from highest to lowest
// 4. If arrays are equal it's possible else impossible

function organizingContainers(container) {
  // Write your code here
  const nrOFBalls = {}
  const nrOfEachBall = {}

  for (let i = 0; i < container.length; i++) {
    nrOFBalls[i] = container[i].reduce((acc, ball) => acc + ball, 0)
    nrOfEachBall[i] = 0

    for (let j = 0; j < container.length; j++) {
      nrOfEachBall[i] += container[j][i]
    }
  }

  const sortedNrOfBalls = Object.values(nrOFBalls).sort((a, b) => b - a)
  const sortedNrOfEachBall = Object.values(nrOfEachBall).sort((a, b) => b - a)

  return JSON.stringify(sortedNrOfBalls) === JSON.stringify(sortedNrOfEachBall)
    ? 'Possible'
    : 'Impossible'
}
