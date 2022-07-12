// A Nice array is defined to be an array where for every value n in the array, 
// there is also an element n - 1 or n + 1 in the array.

// examples:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, 
// else false. An empty array is not considered nice.

/*
Parameters: given an array of numbers
Return: true or false depending on whether each number in the array has another number that is +/- 1
Pseudo Code: check if arr is empty, loop through, for each loop check against plus or minus one elements,
 */

function isNice(arr){
    let result = 0
    let length = arr.length
    if (arr[0] != undefined){
    for (let i =0; i < length; i++){
        for (let j=0; j < length; j++){
            if (arr[j] == arr[i] +1 || arr[j] == arr[i] -1){
                result++
                break;
            }    
         }
    }
        return result == length
    }else{
        return false;
    }
}

const isNice = arr =>arr.length != 0 ? arr.every(e => arr.some(f => e == f +1 || e == f -1)) : false;
