// Given two integer arrays a, b, both of length >= 1, 
// create a program that returns true if the sum of the squares of each element i
// n a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); 
// returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
    return a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 
  }


  function arrayMadness(a, b) {
    return a.map(e=> e**2).reduce((c,d)=>c+d) > b.map(e=> e**3).reduce((c,d)=>c+d);
  }