/*
Write an algorithm that takes an array and moves all of the 
zeros to the end, preserving the order of the other elements.
P: given an array or various elements
R: the array with all elements in the same spot except for 0s moved to end
E: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
PC: loop array, if index === 0 slice, and store in array, then add stored 0s 
to end of array
*/

function moveZeros(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr2.push(0)
        }
    }
    return arr.filter(e => e !== 0).concat(arr2)
}
