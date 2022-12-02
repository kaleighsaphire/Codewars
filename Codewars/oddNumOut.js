/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
P: given an array of nums, array length is odd num, all nums are same except 1
R: the odd num out
E: [1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
Pc: sort array to numerical order, if first num doesnt equal next return it, else return last
*/

function stray(numbers) {
    let arr = numbers.sort();
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}
function stray(numbers) {
    const arr = numbers.sort();
    return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
}