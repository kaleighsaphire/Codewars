//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

/*
Parameters: given an array of numbers
Return: the numbers in the array that are multiples of their index number
Examples: 
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
Pseudo Code: loop through array, if element % index == 0 push to new array and return
 */

function multipleOfIndex(array) {
    const arr = []
    for (let i=0; i< array.length; i++){
      if (array[i] % i == 0){
          arr.push(array[i])
      }
    }
    return arr;
  }

  //alt 
  function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);
  }