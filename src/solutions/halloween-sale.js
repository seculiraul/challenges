// You wish to buy video games from the famous online video game store Mist.

// Usually, all games are sold at the same price,  dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game will cost  dollars, and every subsequent game will cost  dollars less than the previous one. This continues until the cost becomes less than or equal to  dollars, after which every game will cost  dollars. How many games can you buy during the Halloween Sale?

// Example

// .

// The following are the costs of the first , in order:

// Start at  units cost, reduce that by  units each iteration until reaching a minimum possible price, . Starting with  units of currency in your Mist wallet, you can buy 5 games: .

// Function Description

// Complete the howManyGames function in the editor below.

// howManyGames has the following parameters:

// int p: the price of the first game
// int d: the discount from the previous game price
// int m: the minimum cost of a game
// int s: the starting budget
// Input Format

// The first and only line of input contains four space-separated integers , ,  and .

// SOLUTION

/*
    1. Init current price with the first price (p) and the count to 0
    2. While the sum is bigger or equal than the crt price do
    3. Decrease form sum the crt price
    4. Update the crt price. If crt price - discount is less or equal than the minimum price the crt price will be minimum price. Else it will be the crt price - discount
    5. Increace the count by one
 */

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let price = p
  let count = 0
  while (s >= price) {
    s = s - price
    price = price - d <= m ? m : price - d
    count++
  }
  return count
}
