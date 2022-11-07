/*
An ordered sequence of numbers from 1 to N is given. One number 
might have deleted from it, then the remaining numbers were mixed. 
Find the number that was deleted.
If no number was deleted from the starting array, your function 
should return the int 0.

Note: N may be 1 or less (in the latter case, the first array 
    will be []).

P: given an array of nums, possibly empty, and another array of the same nums 
possibly missing one
R: the num missing from the ordered nums, or 0
E: findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
PC: sort mixArr, if arr length = mixarr length, or arr length < 1
return 0 else loop mixarr and return index+1 != e
*/

function findDeletedNumber(arr, mixArr) {
    mixArr = mixArr.sort()
    if (arr.length == mixArr.length) {
        return 0
    } else {
        for (let i = 0; i < mixArr.length; i++) {
            if (arr[0] !== mixArr[0]) {
                return 1
            } else if (arr[i] != mixArr[i]) {
                return arr[i]
            }
        }
    }
}
// filter every num that exists in mixed array
// return arr.filter(n => mixArr.indexOf(n) === -1)[0] || 0
function findDeletedNumber(arr, mixArr) {
    if (arr.length === mixArr.length) {
        return 0
    } else {
        return arr.reduce((a, b) => a + b, 0) - mixArr.reduce((a, b) => a + b, 0)
    }
}
