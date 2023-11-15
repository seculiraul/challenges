const productOfArr = (arr, tot = 1) => {
  if (!arr?.length) return tot
  tot = tot * arr.shift()
  return fac(arr, tot)
}

const pow = (nr, p = 2) => {
  if (p === 1) return nr
  return nr * pow(nr, p - 1)
}

const factorial = (nr) => {
  if (nr < 2) return 1
  return nr * factorial(nr - 1)
}

const fib = (nr) => {
  if (nr < 2) return nr
  return fib(nr - 1) + fib(nr - 2)
}
