// Write a function which calculates the average of the numbers 
// in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    const initialValue = 0;
    const arraySum = array.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    if (array.length === 0){
      return 0;
    }
    return arraySum / array.length;
  }

  // Add all numbers in array together. array.reduce()
  // divive reduces array by number of items in array

//   alt 
//   var find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
//   }