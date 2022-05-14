// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// PREP
// Parameters: n = Number 
// Return number of odd numbers < n > 0
// Pseudo Code: highest integer of n / 2 

function oddCount(n){
    return Math.floor(n/2);
  }
  
// Examples
  console.log(oddCount(12)); // 11,9,7,5,3,1 returns 6
  console.log(oddCount(3)); // 1 returns 1
  console.log(oddCount(100)); // 99, 97, 95, 93, 91, 89 ... returns 50

//   Alt 
//   const oddCount = n => Math.floor(n/2) ;