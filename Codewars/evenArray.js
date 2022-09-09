/* JavaScript Arrays support a filter function. Use the filter functionality 
to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

Parameters: given an array of numbers
Return: an array of only the even numbers
Example: ([1,2,3,9,10,11]) => [2,10]
Pseudo Code: return array filter of elements mod 2 equal zero
*/

function getEvenNumbers(numbersArray){
    return numbersArray.filter(e => e % 2 == 0)
  }

const getEvenNumbers = numbersArray => numbersArray.filter(e => e % 2 == 0);