// There are a number of people who will be attending ACM-ICPC World Finals. Each of them may be well versed in a number of topics. Given a list of topics known by each attendee, presented as binary strings, determine the maximum number of topics a 2-person team can know. Each subject has a column in the binary string, and a '1' means the subject is known while '0' means it is not. Also determine the number of teams that know the maximum number of topics. Return an integer array with two elements. The first is the maximum number of topics known, and the second is the number of teams that know that number of topics.

// Example

// The attendee data is aligned for clarity below:

// 10101
// 11110
// 00010
// These are all possible teams that can be formed:

// Members Subjects
// (1,2)   [1,2,3,4,5]
// (1,3)   [1,3,4,5]
// (2,3)   [1,2,3,4]
// In this case, the first team will know all 5 subjects. They are the only team that can be created that knows that many subjects, so  is returned.

// SOLUTION

// Take each element and the only next element untill the end
// Calculate the number of topics that the team knows
// Compare it to the total if it's equal increace the team number or if it's greater then the current total assign it to the total and reset counter at 1

function acmTeam(topic) {
  // Write your code here

  const total = [0, 0]
  const addSubjects = (sub1, sub2) => {
    let result = 0
    for (let i = 0; i < topic[0].length; i++) {
      result += sub1[i] === '1' || sub2[i] === '1' ? 1 : 0
    }
    return result
  }
  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      const subjectsKnown = addSubjects(topic[i], topic[j])
      if (subjectsKnown === total[0]) {
        total[1] += 1
      } else if (subjectsKnown > total[0]) {
        total[0] = subjectsKnown
        total[1] = 1
      }
    }
  }

  return total
}
