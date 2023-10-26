/*Story
A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...

All the animals are out and some of them are eating each other!

It's a Zoo Disaster!
Here is a list of zoo animals, and what they can eat

antelope eats grass
big-fish eats little-fish
bug eats leaves
bear eats big-fish
bear eats bug
bear eats chicken
bear eats cow
bear eats leaves
bear eats sheep
chicken eats bug
cow eats grass
fox eats chicken
fox eats sheep
giraffe eats leaves
lion eats antelope
lion eats cow
panda eats leaves
sheep eats grass
Kata Task
INPUT
A comma-separated string representing all the things at the zoo

TASK
Figure out who eats whom until no more eating is possible.

OUTPUT
A list of strings (refer to the example below) where:

The first element is the initial zoo (same as INPUT)
The last element is a comma-separated string of what the zoo looks like when all the eating has finished
All other elements (2nd to last-1) are of the form X eats Y describing what happened
Notes
Animals can only eat things beside them

Animals always eat to their LEFT before eating to their RIGHT

Always the LEFTMOST animal capable of eating will eat before any others

Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible

Example
Input

"fox,bug,chicken,grass,sheep"


Output

["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]
*/

// MY SOLUTION

var whoEatsWho = function (zoo) {
  const animals = zoo.split(',')
  let del = 0
  const result = [zoo]
  do {
    del = 0
    for (let i = 0; i < animals.length; i++) {
      const currentAnimal = animals[i]
      const leftAnimal = animals[i - 1]
      const rightAnimal = animals[i + 1]

      if (leftAnimal && eatPairs[currentAnimal]?.includes(leftAnimal)) {
        result.push(`${currentAnimal} eats ${leftAnimal}`)
        animals.splice(i - 1, 1)
        del++
        break
      } else if (
        rightAnimal &&
        eatPairs[currentAnimal]?.includes(rightAnimal)
      ) {
        result.push(`${currentAnimal} eats ${rightAnimal}`)
        animals.splice(i + 1, 1)
        del++
        break
      }
    }
  } while (del != 0)

  result.push(animals.join(','))
  return result
}

const eatPairs = {
  antelope: ['grass'],
  'big-fish': ['little-fish'],
  bug: ['leaves'],
  bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
  chicken: ['bug'],
  cow: ['grass'],
  fox: ['chicken', 'sheep'],
  giraffe: ['leaves'],
  lion: ['antelope', 'cow'],
  panda: ['leaves'],
  sheep: ['grass'],
}

module.exports = whoEatsWho
