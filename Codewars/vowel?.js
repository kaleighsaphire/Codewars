/*
Given an array of numbers, check if any of the numbers are the 
character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

Given array of only num values, if those values equal ascii lowercase 
vowel values, replace them with that vowel. (a,e,i,o,u)(97,101,105,111,117)

*/

function isVow(a) {
    return a.map(e => e === 97 ? e = String.fromCharCode(97) :
        e === 101 ? e = String.fromCharCode(101) :
            e === 105 ? e = String.fromCharCode(105) :
                e === 111 ? e = String.fromCharCode(111) :
                    e === 117 ? e = String.fromCharCode(117) : e)
}
// const isVow = a =>{
//     let map = {
//       97: 'a',
//       101: 'e',
//       105: 'i',
//       111: 'o',
//       117: 'u',
//     }
//     return a.map( num => map[num] ? map[num] : num);
//   }