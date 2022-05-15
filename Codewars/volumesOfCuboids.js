// In this simple exercise, you will create a program that will take two lists of integers, 
// a and b. Each list will consist of 3 positive integers above 0, representing the dimensions 
// of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which 
// is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and 
// the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// Parameters: take in 2 lists of 3 numbers > 0. Represents volume of cube
// Return: The difference in volume between the cubes
// Examples:[1,2,3] and [2,3,4] returns 22
// Pseudo Code: reduce each list, determine greater number, return difference

function findDifference(a, b) {
   const aSum = a.reduce((c,d) => c * d)
   const bSum = b.reduce((c,d) => c * d)
   if (aSum > bSum){
       return aSum - bSum;
   }else{
       return bSum - aSum
   }
  }

  // Final solution. Note, MAth.max is unneccesary.
  const findDifference = ((a,b) => Math.abs(Math.max(a.reduce((c,d) => c * d) - b.reduce((c,d) => c * d))))

//   Alt 
//   function find_difference(a, b) {
//     return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
//   }