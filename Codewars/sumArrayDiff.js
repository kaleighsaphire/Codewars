// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0.

/* Parameters: take an array of numbers
Return: if array is empty return 0, else sort array in descending order, return [0] - [1] + [1] - [2]...
Example ([2,4,1,1]) -> (4-2)+(2-1)+(1-1) -> 3
Pseudo code:if arr has more then one element, sort in descending order, loop through adding sum of index - index+1 */

function sumOfDifferences(arr){
    let num = 0
    arr.sort((a,b)=> b-a)
    if (arr.length < 2){
        return 0;
    }else{
        for (let i = 1; i < arr.length; i++){
           num += arr[i-1] - arr[i]
        }
    }
  return num;
}