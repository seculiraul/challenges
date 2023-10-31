function countingValleys(steps, path) {
  // let addToArray = false
  // let itv = []
  // const all = []
  // let start = 0

  let level = 0
  const arr = path.split('')
  const nrArr = []
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    const acc = arr[i] === 'U' ? 1 : -1
    level += acc
    nrArr.push(level)
  }
  const levels = [0, ...nrArr]
  console.log(levels)
  for (let i = 0; i < levels.length; i++) {
    console.log('i=', i)
    if (levels[i] === 0) {
      const newArr = levels.slice(i + 1, levels.length)
      console.log('newArr', newArr)
      const nextIndex = newArr.indexOf(0)
      console.log('nextIndex', nextIndex)
      const finalArr = levels.slice(i + 1, nextIndex + 1)
      console.log('final', finalArr)
      if (finalArr.includes(-2)) {
        res += 1
      }
    }
    console.log('--------------------------------------------------------')
  }

  return res
}

const x = countingValleys(12, 'DDUUDDUDUUUD')

console.log('result', x)
