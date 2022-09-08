/* Your goal in this kata is to implement a difference function, which 
subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b 
keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed 
from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Parameters: Given 2 arrays of numbers
Return: The first array minus all instances of the values of second array
Example: ([1,3,3,4,5,6], [3,6]) -> [1,4,5]
Pseudo Code: Return filtered array a, item, that does not include b array, item
*/

function arrayDiff(a, b) {
    return a.filter(function(item){
        return !b.includes(item)
      })
}