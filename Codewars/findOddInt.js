/*
Given an array of integers, find the one that appears an odd 
number of times.

There will always be only one integer that appears an odd 
number of times.
P: An array of ints
R: the only int that appears an odd num of times
E: [1,2,2,3,3,3,4,3,3,3,2,2,1] => 4
PC: Hashmap array return key % 2 == 0
*/

function findOdd(A) {
    let hashmap = {}
    for (const e of A) {
        if (!hashmap[e]) {
            hashmap[e] = 0
        }
        hashmap[e]++
    }
    const filter = Object.entries(hashmap).filter(([key, val]) => val % 2 !== 0)
    return Number(filter[0][0])
}


// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }