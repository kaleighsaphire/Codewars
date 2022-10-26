/*
Complete the solution so that it returns true if the first 
argument(string) passed in ends with the 2nd argument (also a string).

P: given 2 strings
R: true or false depending on whether the first string ends with the second
E: 
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
PC: return str1 ends with method str2
*/

function solution(str, ending) {
    return str.endsWith(ending)
}